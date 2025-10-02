// app/modules/explicit_media_redaction/hooks/useExplicitContentSettingsOrDefault.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/explicit_media_redaction/hooks/useExplicitContentSettingsOrDefault.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 1;
            var1 = var3[var1];
            var5 = undefined;
            var8 = var7.bind(var5)(var1);
            var6 = var8.useStateFromStoresObject;
            var1 = _closure1_slot2;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure1_slot2;
                    var1 = var1.settings;
                    var5 = var1.textAndImages;
                    var3 = null;
                    var6 = var3 == var5;
                    var4 = undefined;
                    var1 = undefined;
                    if(var6) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = var5.explicitContentSettings;
case 2:
                    if(!(var3 == var1)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 2;
                    var2 = var5[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.getExplicitContentSettingOrDefault;
                    var1 = var2.bind(var3)();
case 4:
                    return var1;
                }
            };
            var6 = var6.bind(var8)(var4, var1);
            var1 = {};
            var4 = 2;
            var3 = var3[var4];
            var9 = var7.bind(var5)(var3);
            var8 = var9.resolveExplicitContentSettingWithDefaults;
            var3 = {};
            var7 = null;
            var11 = var7 == var6;
            var10 = undefined;
            if(var11) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var10 = var6.explicitContentGuilds;
case 6:
            var3['setting'] = var10;
            var3 = var8.bind(var9)(var3);
            var1['explicitContentGuilds'] = var3;
            var8 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var4];
            var9 = var8.bind(var5)(var3);
            var8 = var9.resolveExplicitContentSettingWithDefaults;
            var3 = {};
            var11 = var7 == var6;
            var10 = undefined;
            if(var11) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var10 = var6.explicitContentNonFriendDm;
case 8:
            var3['setting'] = var10;
            var10 = true;
            var3['isDm'] = var10;
            var3 = var8.bind(var9)(var3);
            var1['explicitContentNonFriendDm'] = var3;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var4];
            var4 = var3.bind(var5)(var2);
            var3 = var4.resolveExplicitContentSettingWithDefaults;
            var2 = {'setting': null, 'isDm': true, 'isFriend': true};
            var7 = var7 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var5 = var6.explicitContentFriendDm;
case 10:
            var2['setting'] = var5;
            var2 = var3.bind(var4)(var2);
            var1['explicitContentFriendDm'] = var2;
            return var1;
        }
    };
    var3['useExplicitContentSettingOrDefault'] = var4;
    var2 = function() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var7 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 1;
            var1 = var3[var1];
            var5 = undefined;
            var8 = var7.bind(var5)(var1);
            var6 = var8.useStateFromStoresObject;
            var1 = _closure1_slot2;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure1_slot2;
                    var1 = var1.settings;
                    var5 = var1.textAndImages;
                    var3 = null;
                    var6 = var3 == var5;
                    var4 = undefined;
                    var1 = undefined;
                    if(var6) { _fun0004_ip = 2; continue _fun0004 }
case 3:
                    var1 = var5.goreContentSettings;
case 2:
                    if(!(var3 == var1)) { _fun0004_ip = 4; continue _fun0004 }
case 5:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 3;
                    var2 = var5[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.getGoreContentSettingOrDefault;
                    var1 = var2.bind(var3)();
case 4:
                    return var1;
                }
            };
            var6 = var6.bind(var8)(var4, var1);
            var1 = {};
            var4 = 3;
            var3 = var3[var4];
            var9 = var7.bind(var5)(var3);
            var8 = var9.resolveGoreSettingWithDefaults;
            var3 = {};
            var7 = null;
            var11 = var7 == var6;
            var10 = undefined;
            if(var11) { _fun0003_ip = 6; continue _fun0003 }
case 7:
            var10 = var6.goreContentGuilds;
case 6:
            var3['setting'] = var10;
            var3 = var8.bind(var9)(var3);
            var1['goreContentGuilds'] = var3;
            var8 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var4];
            var9 = var8.bind(var5)(var3);
            var8 = var9.resolveGoreSettingWithDefaults;
            var3 = {};
            var11 = var7 == var6;
            var10 = undefined;
            if(var11) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var10 = var6.goreContentNonFriendDm;
case 8:
            var3['setting'] = var10;
            var10 = true;
            var3['isDm'] = var10;
            var3 = var8.bind(var9)(var3);
            var1['goreContentNonFriendDm'] = var3;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var4];
            var4 = var3.bind(var5)(var2);
            var3 = var4.resolveGoreSettingWithDefaults;
            var2 = {'setting': null, 'isDm': true, 'isFriend': true};
            var7 = var7 == var6;
            var5 = undefined;
            if(var7) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var5 = var6.goreContentFriendDm;
case 10:
            var2['setting'] = var5;
            var2 = var3.bind(var4)(var2);
            var1['goreContentFriendDm'] = var2;
            return var1;
        }
    };
    var3['useGoreContentSettingOrDefault'] = var2;
    return var1;
})();