// app/modules/channel/getChannelIcon.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelTypes;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel/getChannelIcon.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getChannelIconURL(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var6 = arguments[1];
            var5 = undefined;
            if(!(var6 === var5)) { _fun0001_ip = 15; continue _fun0001 }
 12:
            var6 = 32;
 15:
            var4 = var2.type;
            var3 = _closure1_slot5;
            var3 = var3.DM;
            if(!(var3 !== var4)) { _fun0001_ip = 124; continue _fun0001 }
 37:
            var3 = _closure1_slot5;
            var3 = var3.GROUP_DM;
            if(!(var3 !== var4)) { _fun0001_ip = 53; continue _fun0001 }
 51:
            return var5;
 53:
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 4;
            var3 = var7[var3];
            var7 = var4.bind(var5)(var3);
            var4 = var7.getChannelIconURL;
            var3 = {};
            var8 = var2.id;
            var3['id'] = var8;
            var8 = var2.icon;
            var3['icon'] = var8;
            var8 = var2.getApplicationId;
            var8 = var8.bind(var2)();
            var3['applicationId'] = var8;
            var3['size'] = var6;
            var3 = var4.bind(var7)(var3);
            return var3;
 124:
            var4 = var2.recipients;
            var3 = var4.map;
            var2 = _closure1_slot4;
            var2 = var2.getUser;
            var4 = var3.bind(var4)(var2);
            var3 = var4.filter;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 3;
            var2 = var8[var2];
            var2 = var7.bind(var5)(var2);
            var2 = var2.isNotNullish;
            var3 = var3.bind(var4)(var2);
            var2 = _closure1_slot3;
            var1 = 1;
            var2 = var2.bind(var5)(var3, var1);
            var1 = 0;
            var4 = var2[var1];
            var1 = null;
            var2 = var1 == var4;
            if(var2) { _fun0001_ip = 230; continue _fun0001 }
 214:
            var3 = var4.getAvatarURL;
            var2 = arguments[2];
            var1 = var3.bind(var4)(var5, var6, var2);
 230:
            return var1;
        }
    };
    var3['getChannelIconURL'] = var4;
    var2 = function getChannelIconSource(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var4 = var2.type;
            var3 = _closure1_slot5;
            var3 = var3.DM;
            if(!(var3 !== var4)) { _fun0002_ip = 119; continue _fun0002 }
 25:
            var3 = _closure1_slot5;
            var3 = var3.GROUP_DM;
            if(!(var3 !== var4)) { _fun0002_ip = 43; continue _fun0002 }
 39:
            var3 = undefined;
            return var3;
 43:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 4;
            var4 = var4[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.getChannelIconSource;
            var3 = {};
            var6 = var2.id;
            var3['id'] = var6;
            var6 = var2.icon;
            var3['icon'] = var6;
            var6 = var2.getApplicationId;
            var6 = var6.bind(var2)();
            var3['applicationId'] = var6;
            var6 = 128;
            var3['size'] = var6;
            var3 = var4.bind(var5)(var3);
            return var3;
 119:
            var4 = var2.recipients;
            var3 = var4.map;
            var2 = _closure1_slot4;
            var2 = var2.getUser;
            var5 = var3.bind(var4)(var2);
            var3 = var5.filter;
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 3;
            var2 = var4[var2];
            var4 = undefined;
            var2 = var6.bind(var4)(var2);
            var2 = var2.isNotNullish;
            var3 = var3.bind(var5)(var2);
            var2 = _closure1_slot3;
            var1 = 1;
            var2 = var2.bind(var4)(var3, var1);
            var1 = 0;
            var3 = var2[var1];
            var1 = null;
            var2 = var1 != var3;
            if(!var2) { _fun0002_ip = 222; continue _fun0002 }
 211:
            var2 = var3.getAvatarSource;
            var1 = var2.bind(var3)(var4);
 222:
            return var1;
        }
    };
    var3['getChannelIconSource'] = var2;
    return var1;
})();