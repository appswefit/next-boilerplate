import { test, expect } from '@playwright/test';

test('should be able to buy a movie', async ({ page }) => {
  await page.route('http://localhost:3000/products?searchTerm=null&limit=10&offset=0', async route => {
    const json = { 
      body: {
        content: [
          {
            id: 1,
            title: 'Viúva Negra',
            price: 9.99,
            image: 'https://wefit-react-web-test.s3.amazonaws.com/viuva-negra.png'    
          },
          {
            "id": 2,
            "title": "Shang-chi",
            "price": 30.99,
            "image": "https://wefit-react-web-test.s3.amazonaws.com/shang-chi.png"
          },
          {
            "id": 3,
            "title": "Homem Aranha",
            "price": 29.9,
            "image": "https://wefit-react-web-test.s3.amazonaws.com/spider-man.png"
          },
          {
            "id": 5,
            "title": "Morbius",
            "price": 1.5,
            "image": "https://wefit-react-web-test.s3.amazonaws.com/morbius-1.png"
          },
        ]
      }
    };
    await route.fulfill({ json });
  });


  await page.goto('./', { waitUntil: 'networkidle' });

  await page.locator('button').first().click();
  await page.locator('div').filter({ hasText: /^Meu Carrinho 1 itens$/ }).getByRole('link').click();
  await page.getByRole('link', { name: 'Finalizar pedido' }).click();
  await expect(page.getByRole('heading', { name: 'Compra realizada com sucesso!' })).toBeInViewport()
});