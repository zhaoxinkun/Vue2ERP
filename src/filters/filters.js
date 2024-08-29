// 全局过滤器
export function statusFilter(val) {
    switch (val) {
        case 0:
            return "进件初始"
        case  1:
            return "提交一审"
        case  2:
            return "一审通过"
        case  3:
            return "一审拒绝"
        case  4:
            return "提交二审"
        case  5:
            return "二审通过"
        case  6:
            return "二审拒绝"
        case  7:
            return "提交终审"
        case  8:
            return "终审通过"
        case  9:
            return "终审拒绝"
        case  10:
            return "审批完成"
        case  11:
            return "生成凭证"
    }
}


export function statusStyle(val) {
    switch (val) {
        case 0:
            return "success"
        case  1:
            return "info"
        case  2:
            return "success"
        case  3:
            return "danger"
        case  4:
            return "info"
        case  5:
            return "success"
        case  6:
            return "danger"
        case  7:
            return "info"
        case  8:
            return "success"
        case  9:
            return "danger"
        case  10:
            return "success"
        case  11:
            return "warning"
    }
}

// 时间过滤

export function timeFilter(value) {
    if (!value) return '';
    console.log("filter---timeFilter使用了")
    alert("1")
    const date = new Date(value);
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'UTC'
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
}
