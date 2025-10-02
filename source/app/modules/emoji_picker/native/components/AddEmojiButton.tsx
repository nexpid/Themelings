// app/modules/emoji_picker/native/components/AddEmojiButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _pickImage() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var2 = arg1;
                    var11 = var2.channel;
                    var5 = undefined;
                    SaveGenerator(address=24);
case 4:
                    return var5;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 4;
                    var3 = var7[var3];
                    var7 = var4.bind(var5)(var3);
                    var4 = var7.requestPermission;
                    var3 = _closure1_slot5;
                    var3 = var3.PHOTOS;
                    var3 = var4.bind(var7)(var3);
                    SaveGenerator(address=81);
case 8:
                    return var3;
case 9:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    if(!var3) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 5;
                    var4 = var8[var4];
                    var8 = var7.bind(var5)(var4);
                    var7 = var8.openImagePicker;
                    var4 = {};
                    var9 = _closure1_slot4;
                    var4['size'] = var9;
                    var4 = var7.bind(var8)(var4);
                    SaveGenerator(address=141);
case 14:
                    return var4;
case 15:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                    var9 = null;
                    var7 = var9 != var4;
                    if(!var7) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                    var8 = var4.errorStr;
                    var7 = var9 == var8;
case 18:
                    if(!var7) { _fun0001_ip = 20; continue _fun0001 }
case 21:
                    var8 = var4.base64;
                    var7 = var9 != var8;
case 20:
                    if(!var7) { _fun0001_ip = 12; continue _fun0001 }
case 22:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 6;
                    var6 = var8[var6];
                    var8 = var7.bind(var5)(var6);
                    var7 = var8.openEmojiStudio;
                    var6 = {};
                    var6['asset'] = var4;
                    var12 = var9 == var11;
                    var10 = undefined;
                    if(var12) { _fun0001_ip = 23; continue _fun0001 }
case 24:
                    var10 = var11.guild_id;
case 23:
                    var11 = var9 != var10;
                    var9 = null;
                    if(!var11) { _fun0001_ip = 25; continue _fun0001 }
case 26:
                    var9 = var10;
case 25:
                    var6['guildId'] = var9;
                    var6 = var7.bind(var8)(var6);
case 12:
                    return var5;
case 16:
                    return var4;
case 10:
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot7 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.UPLOAD_EMOJI_SIZE;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NativePermissionTypes;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/emoji_picker/native/components/AddEmojiButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AddEmojiButton(arg1) {
        var1 = arg1;
        var1 = var1.channel;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot6;
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 7;
        var1 = var10[var1];
        var3 = undefined;
        var1 = var9.bind(var3)(var1);
        var2 = var1.Button;
        var1 = {'size': 'md', 'variant': 'tertiary'};
        var6 = 8;
        var7 = var10[var6];
        var7 = var9.bind(var3)(var7);
        var8 = var7.intl;
        var7 = var8.string;
        var6 = var10[var6];
        var6 = var9.bind(var3)(var6);
        var6 = var6.t;
        var6 = var6.iMJO39;
        var6 = var7.bind(var8)(var6);
        var1['text'] = var6;
        var5 = function onPress() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = {};
                var4 = _closure2_slot0;
                var1 = null;
                var4 = var1 != var4;
                if(!var4) { _fun0002_ip = 4; continue _fun0002 }
case 27:
                var1 = _closure2_slot0;
case 4:
                var3['channel'] = var1;
                var2 = function pickImage() {
                    var1 = undefined;
                    var4 = _closure1_slot7;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                return var1;
            }
        };
        var1['onPress'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();