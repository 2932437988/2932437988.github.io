hexo.extend.helper.register('cloudTags', function(options = {}) {
    const env = this
    let source = options.source
    const limit = options.limit
    // 从小到大排序然后再翻转，即从大到小排序
    source = source.sort('length').reverse()
    let result = ''
    if (limit > 0) source = source.limit(limit)

    source.forEach(tag => {
        const color = 'rgb(' + Math.floor(Math.random() * 201) + ', ' + Math.floor(Math.random() * 201) + ', ' + Math.floor(Math.random() * 201) + ')' // 0,0,0 -> 200,200,200
        result += `<a href="${env.url_for(tag.path)}" style="color: ${color}">${tag.name} (${tag.length})</a>`
    })
    return result
})