addEventListener('fetch', event => {
    event.respondWith(
      new Response('Sua página foi atualizada com sucesso!', {
        status: 200,
        headers: {
          'Content-Type': 'text/html',
        },
      })
    )
  })
  