// app/modules/launchpad/native/shared/renderChannelBadge.tsx
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
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/launchpad/native/shared/renderChannelBadge.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function renderChannelBadge(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.newChannel;
            var5 = undefined;
            if(!(var1 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = false;
case 2:
            var7 = var2.mentionCount;
            if(!(var7 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = 0;
case 4:
            var6 = var2.isMentionLowImportance;
            var8 = var2.postsWithUnreadsCount;
            var15 = var2.newPostCount;
            var9 = var2.eventsMentionCount;
            var14 = var2.locale;
            var3 = null;
            if(!(var3 != var7)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = 0;
            if(!(!(var7 > var2))) { _fun0001_ip = 8; continue _fun0001 }
case 6:
            if(var1) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            if(!(var3 != var15)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var1 = 0;
            if(!(!(var15 > var1))) { _fun0001_ip = 13; continue _fun0001 }
case 11:
            if(!(var3 != var8)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var1 = 0;
            if(!(!(var8 > var1))) { _fun0001_ip = 16; continue _fun0001 }
case 14:
            var2 = var3 != var9;
            var1 = null;
            if(!var2) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var2 = 0;
            var2 = var9 > var2;
            var1 = null;
            if(!var2) { _fun0001_ip = 17; continue _fun0001 }
case 19:
            var4 = _closure1_slot3;
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 2;
            var2 = var10[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['value'] = var9;
            var9 = true;
            var2['eventsMentionBadge'] = var9;
            var1 = var4.bind(var5)(var3, var2);
case 17:
            _fun0001_ip = 20; continue _fun0001;
case 16:
            var4 = _closure1_slot3;
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 4;
            var2 = var9[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.Text;
            var2 = {'variant': 'text-xs/bold', 'color': 'text-muted'};
            var2['children'] = var8;
            var1 = var4.bind(var5)(var3, var2);
case 20:
            _fun0001_ip = 21; continue _fun0001;
case 13:
            var4 = _closure1_slot3;
            var13 = _closure1_slot0;
            var16 = _closure1_slot2;
            var2 = 4;
            var2 = var16[var2];
            var2 = var13.bind(var5)(var2);
            var3 = var2.Text;
            var2 = {'variant': 'text-xs/bold', 'color': 'text-brand'};
            var8 = 5;
            var9 = var16[var8];
            var9 = var13.bind(var5)(var9);
            var11 = var9.intl;
            var10 = var11.format;
            var8 = var16[var8];
            var8 = var13.bind(var5)(var8);
            var8 = var8.t;
            var9 = var8.GkAbqa;
            var8 = {};
            var12 = 6;
            var12 = var16[var12];
            var13 = var13.bind(var5)(var12);
            var12 = var13.humanizeValue;
            var12 = var12.bind(var13)(var15, var14);
            var8['count'] = var12;
            var8 = var10.bind(var11)(var9, var8);
            var2['children'] = var8;
            var1 = var4.bind(var5)(var3, var2);
case 21:
            _fun0001_ip = 22; continue _fun0001;
case 9:
            var4 = _closure1_slot3;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 3;
            var2 = var8[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var1 = var4.bind(var5)(var3, var2);
case 22:
            _fun0001_ip = 23; continue _fun0001;
case 8:
            var4 = _closure1_slot3;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 2;
            var2 = var8[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['value'] = var7;
            var2['isMentionLowImportance'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 23:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();