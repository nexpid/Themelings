// app/modules/main_tabs_v2/native/shared_components/guild_channels/ChannelUnreadBadge.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MUTED_OPACITY_CONTENT;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UnreadSetting;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'flexGrow': 0, 'flexShrink': 0, 'position': 'absolute'};
    var4['unreadBadge'] = var10;
    var10 = {};
    var11 = -16;
    var10['marginLeft'] = var11;
    var4['unreadBadgePanel'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot7 = var4;
    var4 = var7.memo;
    var2 = function ChannelUnreadBadge(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.unread;
            var14 = var1.resolvedUnreadSetting;
            var12 = var1.muted;
            var9 = var1.isThread;
            var10 = var1.layout;
            var7 = var1.launchpad;
            var15 = var1.panelVariant;
            var5 = undefined;
            if(!(var15 === var5)) { _fun0001_ip = 53; continue _fun0001 }
 51:
            var15 = false;
 53:
            var1 = _closure1_slot7;
            var13 = var1.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var8 = 6;
            var1 = var4[var8];
            var6 = var3.bind(var5)(var1);
            var1 = var6.getLayoutStyles;
            var7 = var1.bind(var6)(var10, var7);
            var1 = 7;
            var1 = var4[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useFontScale;
            var16 = var1.bind(var3)();
            var1 = null;
            if(!var2) { _fun0001_ip = 366; continue _fun0001 }
 126:
            var4 = _closure1_slot6;
            var3 = _closure1_slot3;
            var2 = {};
            var10 = var13.unreadBadge;
            var6 = new Array(4);
            var6[0] = var10;
            var10 = undefined;
            if(!var15) { _fun0001_ip = 161; continue _fun0001 }
 155:
            var10 = var13.unreadBadgePanel;
 161:
            var6[1] = var10;
            var10 = var7.unreadBadge;
            if(var9) { _fun0001_ip = 181; continue _fun0001 }
 174:
            var9 = var10.position;
            _fun0001_ip = 187; continue _fun0001;
 181:
            var9 = var10.positionThread;
 187:
            var6[2] = var9;
            var10 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = var13[var8];
            var9 = var10.bind(var5)(var8);
            var8 = var9.makeSizeStyle;
            var7 = var7.unreadBadge;
            var7 = var7.size;
            var7 = var8.bind(var9)(var7);
            var6[3] = var7;
            var2['style'] = var6;
            var8 = _closure1_slot6;
            var7 = _closure1_slot1;
            var9 = 8;
            var6 = var13[var9];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var6['classic'] = var15;
            var9 = var13[var9];
            var9 = var10.bind(var5)(var9);
            var13 = var9.CHANNEL_BADGE_SIZE;
            var9 = global;
            var15 = var9.Math;
            var10 = var15.max;
            var9 = 1;
            var10 = var10.bind(var15)(var16, var9);
            var10 = var13 * var10;
            var6['size'] = var10;
            var10 = {};
            var13 = _closure1_slot5;
            var13 = var13.ALL_MESSAGES;
            if(!(var14 === var13)) { _fun0001_ip = 329; continue _fun0001 }
 326:
            if(!var12) { _fun0001_ip = 333; continue _fun0001 }
 329:
            var9 = _closure1_slot4;
 333:
            var10['opacity'] = var9;
            var9 = new Array(1);
            var9[0] = var10;
            var6['badgeStyle'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 366:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/guild_channels/ChannelUnreadBadge.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();