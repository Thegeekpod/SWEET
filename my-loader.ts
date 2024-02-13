// // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
// export default function imgixLoader({ src, width, quality }) {
//     const url = new URL(`http://localhost:3000${src}`)
//     const params = url.searchParams
//     params.set('auto', params.getAll('auto').join(',') || 'format')
//     params.set('fit', params.get('fit') || 'max')
//     params.set('w', params.get('w') || width.toString())
//     params.set('q', (quality || 50).toString())
//     return url.href
//     console.log()
//   }
  // Docs: https://developer.fastly.com/reference/io/
export default function imgixLoader({ src, width, quality }) {
 
    return `${src}?w=${width}&q=${quality || 75}`;
  
  
}