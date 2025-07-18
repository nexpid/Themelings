// app/modules/explicit_media_redaction/hooks/useExplicitContentSettingsOrDefault.tsx
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
    var4 = native3;
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
 0:
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
 0:
                    var1 = _closure1_slot2;
                    var1 = var1.settings;
                    var5 = var1.textAndImages;
                    var3 = null;
                    var6 = var3 == var5;
                    var4 = undefined;
                    var1 = undefined;
                    if(var6) { _fun0002_ip = 38; continue _fun0002 }
 32:
                    var1 = var5.explicitContentSettings;
 38:
                    if(!(var3 == var1)) { _fun0002_ip = 72; continue _fun0002 }
 42:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 2;
                    var2 = var5[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.getExplicitContentSettingOrDefault;
                    var1 = var2.bind(var3)();
 72:
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
            if(var11) { _fun0001_ip = 97; continue _fun0001 }
 91:
            var10 = var6.explicitContentGuilds;
 97:
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
            if(var11) { _fun0001_ip = 152; continue _fun0001 }
 146:
            var10 = var6.explicitContentNonFriendDm;
 152:
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
            if(var7) { _fun0001_ip = 222; continue _fun0001 }
 216:
            var5 = var6.explicitContentFriendDm;
 222:
            var2['setting'] = var5;
            var2 = var3.bind(var4)(var2);
            var1['explicitContentFriendDm'] = var2;
            return var1;
        }
    };
    var3['useExplicitContentSettingOrDefault'] = var4;
    var2 = function() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
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
 0:
                    var1 = _closure1_slot2;
                    var1 = var1.settings;
                    var5 = var1.textAndImages;
                    var3 = null;
                    var6 = var3 == var5;
                    var4 = undefined;
                    var1 = undefined;
                    if(var6) { _fun0004_ip = 38; continue _fun0004 }
 32:
                    var1 = var5.goreContentSettings;
 38:
                    if(!(var3 == var1)) { _fun0004_ip = 72; continue _fun0004 }
 42:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 3;
                    var2 = var5[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.getGoreContentSettingOrDefault;
                    var1 = var2.bind(var3)();
 72:
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
            if(var11) { _fun0003_ip = 97; continue _fun0003 }
 91:
            var10 = var6.goreContentGuilds;
 97:
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
            if(var11) { _fun0003_ip = 152; continue _fun0003 }
 146:
            var10 = var6.goreContentNonFriendDm;
 152:
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
            if(var7) { _fun0003_ip = 222; continue _fun0003 }
 216:
            var5 = var6.goreContentFriendDm;
 222:
            var2['setting'] = var5;
            var2 = var3.bind(var4)(var2);
            var1['goreContentFriendDm'] = var2;
            return var1;
        }
    };
    var3['useGoreContentSettingOrDefault'] = var2;
    return var1;
})();