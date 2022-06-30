<template>
    <a href="javascript:;">{{label}}</a>
</template>

<script>
import moment from 'moment'
export default {
    name: 'btnCpt',
    data() {
        console.log(new moment());
        return {}
    },
    props: {
        label: {
            type: String,
            default: ''
        }
    }
}
</script>