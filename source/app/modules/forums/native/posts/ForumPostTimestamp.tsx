// app/modules/forums/native/posts/ForumPostTimestamp.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useForumChannelStore;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'lineHeight': 18, 'height': 18};
    var4['text'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forums/native/posts/ForumPostTimestamp.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ForumPostTimestamp(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var8 = var1.textStyle;
            var10 = var1.thread;
            var2 = var1.hasUnreads;
            var9 = var1.format;
            var3 = _closure1_slot4;
            var4 = undefined;
            var7 = var3.bind(var4)();
            var5 = _closure1_slot2;
            var3 = var10.parent_id;
            var3 = var5.bind(var4)(var3);
            var6 = var3.sortOrder;
            var5 = _closure1_slot0;
            var11 = _closure1_slot1;
            var3 = 4;
            var3 = var11[var3];
            var5 = var5.bind(var4)(var3);
            var3 = var5.useLastActiveTimestamp;
            var5 = var3.bind(var5)(var10, var6, var9);
            var6 = 'text-muted';
            if(!var2) { _fun0001_ip = 108; continue _fun0001 }
 102:
            var6 = 'header-secondary';
 108:
            var3 = _closure1_slot3;
            var2 = _closure1_slot0;
            var9 = _closure1_slot1;
            var1 = 5;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {'lineClamp': 1, 'variant': 'text-xs/normal'};
            var1['color'] = var6;
            var6 = new Array(2);
            var6[0] = var8;
            var7 = var7.text;
            var6[1] = var7;
            var1['style'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();