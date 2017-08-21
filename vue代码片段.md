###
1. Laravel 使用vue-resource发送ajax请求怎么添加CsrfToken：
<meta name="csrf-token" content="{{ csrf_token() }}">
<script>
Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name=csrf-token]').getAttribute('content')
</script>
参考：https://segmentfault.com/q/1010000006847091?_ea=1150533
