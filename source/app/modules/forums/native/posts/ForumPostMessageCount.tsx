// app/modules/forums/native/posts/ForumPostMessageCount.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = require;
        var15 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var15;
        var _closure1_slot2 = var6;
        var1 = global;
        var8 = var1.Object;
        var7 = var8.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var7.bind(var8)(var3, var1, var4);
        var11 = 0;
        var7 = var6[var11];
        var4 = metroImportAll;
        var1 = undefined;
        var4 = var4.bind(var1)(var7);
        var4 = 1;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.View;
        var _closure1_slot3 = var4;
        var12 = 2;
        var4 = var6[var12];
        var4 = var5.bind(var1)(var4);
        var7 = var4.jsx;
        var _closure1_slot4 = var7;
        var4 = var4.jsxs;
        var _closure1_slot5 = var4;
        var4 = 3;
        var4 = var6[var4];
        var8 = var5.bind(var1)(var4);
        var7 = var8.createStyles;
        var4 = {};
        var9 = {};
        var10 = 4;
        var13 = var6[var10];
        var13 = var15.bind(var1)(var13);
        var13 = var13.colors;
        var13 = var13.INTERACTIVE_MUTED;
        var9['tintColor'] = var13;
        var9['marginEnd'] = var10;
        var13 = 5;
        var14 = var6[var13];
        var16 = var5.bind(var1)(var14);
        var14 = var16.isAndroid;
        var16 = var14.bind(var16)();
        var14 = 0;
        if(!var16) { _fun0001_ip = 208; continue _fun0001 }
 205:
        var14 = var12;
 208:
        var9['marginTop'] = var14;
        var4['iconRead'] = var9;
        var9 = {};
        var14 = var6[var10];
        var14 = var15.bind(var1)(var14);
        var14 = var14.colors;
        var14 = var14.INTERACTIVE_NORMAL;
        var9['tintColor'] = var14;
        var9['marginEnd'] = var10;
        var13 = var6[var13];
        var14 = var5.bind(var1)(var13);
        var13 = var14.isAndroid;
        var13 = var13.bind(var14)();
        var11 = 0;
        if(!var13) { _fun0001_ip = 275; continue _fun0001 }
 272:
        var11 = var12;
 275:
        var9['marginTop'] = var11;
        var4['iconUnread'] = var9;
        var9 = {};
        var9['marginStart'] = var10;
        var4['messageCount'] = var9;
        var9 = {};
        var9['marginStart'] = var10;
        var4['messageUnreadCount'] = var9;
        var9 = {'flexDirection': 'row', 'alignItems': 'center'};
        var4['container'] = var9;
        var4 = var7.bind(var8)(var4);
        var _closure1_slot6 = var4;
        var4 = 11;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/forums/native/posts/ForumPostMessageCount.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function ForumPostMessageCount(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = arg1;
                var3 = var1.thread;
                var17 = var1.hasUnreads;
                var8 = var1.containerStyle;
                var1 = _closure1_slot6;
                var4 = undefined;
                var12 = var1.bind(var4)();
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 6;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.useMessageCount;
                var1 = var1.bind(var2)(var3);
                var11 = var1.messageCountText;
                var6 = var1.isMaxMessageCount;
                var9 = var1.messageCount;
                var14 = var1.unreadCount;
                var13 = 'text-muted';
                if(!var17) { _fun0002_ip = 104; continue _fun0002 }
 98:
                var13 = 'text-normal';
 104:
                var3 = _closure1_slot5;
                var2 = _closure1_slot3;
                var1 = {};
                var10 = var12.container;
                var5 = new Array(2);
                var5[0] = var10;
                var5[1] = var8;
                var1['style'] = var5;
                var8 = _closure1_slot0;
                var16 = _closure1_slot2;
                var15 = 7;
                var5 = var16[var15];
                var5 = var8.bind(var4)(var5);
                var19 = var5.intl;
                var18 = var19.formatToPlainString;
                var5 = var16[var15];
                var5 = var8.bind(var4)(var5);
                var5 = var5.t;
                var10 = var5.8M0DrK;
                var5 = {};
                var5['count'] = var11;
                var5 = var18.bind(var19)(var10, var5);
                var1['accessibilityLabel'] = var5;
                var10 = _closure1_slot4;
                var5 = 8;
                var5 = var16[var5];
                var5 = var8.bind(var4)(var5);
                var8 = var5.ChatIcon;
                var5 = {};
                var16 = 'xs';
                var5['size'] = var16;
                if(var17) { _fun0002_ip = 246; continue _fun0002 }
 238:
                var16 = var12.iconRead;
                _fun0002_ip = 252; continue _fun0002;
 246:
                var16 = var12.iconUnread;
 252:
                var5['style'] = var16;
                var16 = 'interactive-muted';
                if(!var17) { _fun0002_ip = 271; continue _fun0002 }
 265:
                var16 = 'interactive-normal';
 271:
                var5['color'] = var16;
                var8 = var10.bind(var4)(var8, var5);
                var5 = new Array(3);
                var5[0] = var8;
                var10 = _closure1_slot4;
                if(var6) { _fun0002_ip = 351; continue _fun0002 }
 296:
                var8 = _closure1_slot1;
                var16 = _closure1_slot2;
                var6 = 10;
                var6 = var16[var6];
                var8 = var8.bind(var4)(var6);
                var6 = {};
                var6['count'] = var9;
                var9 = 'text-sm/semibold';
                var6['textVariant'] = var9;
                var6['textColor'] = var13;
                var9 = false;
                var6['animate'] = var9;
                var6 = var10.bind(var4)(var8, var6);
                _fun0002_ip = 400; continue _fun0002;
 351:
                var9 = _closure1_slot0;
                var16 = _closure1_slot2;
                var8 = 9;
                var8 = var16[var8];
                var8 = var9.bind(var4)(var8);
                var9 = var8.Text;
                var8 = {};
                var16 = 'text-sm/semibold';
                var8['variant'] = var16;
                var8['color'] = var13;
                var8['children'] = var11;
                var6 = var10.bind(var4)(var9, var8);
 400:
                var5[1] = var6;
                var6 = null;
                var6 = var6 != var14;
                if(!var6) { _fun0002_ip = 554; continue _fun0002 }
 416:
                var9 = _closure1_slot5;
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var7 = 9;
                var7 = var10[var7];
                var7 = var11.bind(var4)(var7);
                var8 = var7.Text;
                var7 = {'variant': 'text-sm/semibold', 'color': 'text-brand'};
                var12 = var12.messageUnreadCount;
                var7['style'] = var12;
                var12 = var10[var15];
                var12 = var11.bind(var4)(var12);
                var13 = var12.intl;
                var12 = var13.format;
                var10 = var10[var15];
                var10 = var11.bind(var4)(var10);
                var10 = var10.t;
                var11 = var10.z3PEtr;
                var10 = {};
                var10['count'] = var14;
                var11 = var12.bind(var13)(var11, var10);
                var10 = ['('];
                var10[1] = var11;
                var11 = ')';
                var10[2] = var11;
                var7['children'] = var10;
                var6 = var9.bind(var4)(var8, var7);
 554:
                var5[2] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var3['default'] = var2;
        return var1;
    }
})();