Page({
	data: {
        selectedLables: ',疾病医疗,',
        tags: [
            {
                label: '意外医疗',
                selected: false,
                onChange: 'onTagChange1',
            },
            {
                label: '疾病医疗',
                selected: true,
                onChange: 'onTagChange2',
            },
            {
                label: '疾病住院',
                selected: false,
                onChange: 'onTagChange3',
            },
        ]
    },
    onTagChange1(e) {
        this.onTagChange(e.target.dataset.selected, 0);
    },
    onTagChange2(e) {
        this.onTagChange(e.target.dataset.selected, 1);
    },
    onTagChange3(e) {
        this.onTagChange(e.target.dataset.selected, 2);
    },
    onTagChange(selected, index) {
        const tempTag = [].concat(this.data.tags);
        tempTag[index].selected = !selected;
				const labels = tempTag.map((item) => item.selected ? item.label : '').join(',');
        this.setData({
            tags: tempTag,
            selectedLables: labels,
        });
    }
})
