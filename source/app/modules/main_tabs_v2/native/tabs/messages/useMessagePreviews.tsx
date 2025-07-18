// app/modules/main_tabs_v2/native/tabs/messages/useMessagePreviews.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var2 = function useMessagePreviewSetting(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 3;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = _closure1_slot3;
                var2 = var2.settings;
                var5 = var2.guilds;
                var6 = _closure2_slot0;
                var3 = null;
                var4 = var3 != var6;
                var2 = null;
                if(!var4) { _fun0001_ip = 89; continue _fun0001 }
 37:
                var8 = var3 == var5;
                var4 = undefined;
                if(var8) { _fun0001_ip = 86; continue _fun0001 }
 46:
                var5 = var5.guilds;
                var5 = var5[var6];
                var6 = var3 == var5;
                var4 = undefined;
                if(var6) { _fun0001_ip = 86; continue _fun0001 }
 65:
                var5 = var5.mobileRedesignChannelListSettings;
                var6 = var3 == var5;
                var4 = undefined;
                if(var6) { _fun0001_ip = 86; continue _fun0001 }
 80:
                var4 = var5.messagePreviews;
 86:
                var2 = var4;
 89:
                if(!(var3 != var2)) { _fun0001_ip = 139; continue _fun0001 }
 93:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 2;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var5 = var3.ValidMessagePreviewTypes;
                var4 = var5.has;
                var3 = var2.value;
                var3 = var4.bind(var5)(var3);
                if(var3) { _fun0001_ip = 179; continue _fun0001 }
 139:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 2;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var3 = var1.MessagePreviewSetting;
                var1 = var3.getSetting;
                var1 = var1.bind(var3)();
                _fun0001_ip = 184; continue _fun0001;
 179:
                var1 = var2.value;
 184:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot5 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/tabs/messages/useMessagePreviews.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useMessagePreview(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var7 = arg2;
            var _closure2_slot0 = var4;
            var6 = _closure1_slot5;
            var5 = var4.guild_id;
            var3 = undefined;
            var8 = var6.bind(var3)(var5);
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 3;
            var5 = var9[var5];
            var10 = var6.bind(var3)(var5);
            var6 = var10.useStateFromStores;
            var11 = _closure1_slot4;
            var5 = new Array(1);
            var5[0] = var11;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0003_ip = 43; continue _fun0003 }
 16:
                    var4 = _closure1_slot4;
                    var3 = var4.hasUnread;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
 43:
                    return var1;
                }
            };
            var6 = var6.bind(var10)(var5, var2);
            var5 = _closure1_slot1;
            var2 = 4;
            var2 = var9[var2];
            var2 = var5.bind(var3)(var2);
            var2 = var2.bind(var3)(var4);
            if(var2) { _fun0002_ip = 141; continue _fun0002 }
 105:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 5;
            var5 = var10[var5];
            var5 = var9.bind(var3)(var5);
            var5 = var5.MessagePreviewTypes;
            var5 = var5.NONE;
            var2 = var8 === var5;
 141:
            if(var2) { _fun0002_ip = 198; continue _fun0002 }
 144:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 5;
            var5 = var10[var5];
            var5 = var9.bind(var3)(var5);
            var5 = var5.MessagePreviewTypes;
            var5 = var5.UNREADS;
            var5 = var8 === var5;
            if(!var5) { _fun0002_ip = 195; continue _fun0002 }
 183:
            var8 = null;
            if(!(var8 != var7)) { _fun0002_ip = 192; continue _fun0002 }
 189:
            var6 = var7;
 192:
            var5 = !var6;
 195:
            var2 = var5;
 198:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 6;
            var1 = var6[var1];
            var1 = var5.bind(var3)(var1);
            var1 = var1.bind(var3)(var4, var2);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['useMessagePreviewSetting'] = var2;
    return var1;
})();