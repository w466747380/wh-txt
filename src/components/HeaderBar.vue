<template>
    <mu-appbar style="width: 100%;" color="primary">
        <mu-button icon slot="left">
            <mu-icon value="menu"></mu-icon>
        </mu-button>
        文华TXT阅读器
        <mu-menu slot="right">
            <mu-button flat>MENU</mu-button>
            <mu-list slot="content">
            <mu-list-item button>
                <mu-list-item-content>
                <mu-list-item-title>添加书籍</mu-list-item-title>
                </mu-list-item-content>
            </mu-list-item>
            <mu-list-item button>
                <mu-list-item-content>
                <mu-list-item-title>Menu Item 2</mu-list-item-title>
                </mu-list-item-content>
            </mu-list-item>
            </mu-list>
        </mu-menu>
    </mu-appbar>
</template>

<script>
export default {
    data () {
        return {
            
        }
    },
    created() {
        
    },
    methods: {
        
    }
}
</script>
