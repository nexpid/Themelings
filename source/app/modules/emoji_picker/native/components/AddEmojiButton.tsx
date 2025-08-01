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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 233; continue _fun0001 }
 10:
                    var2 = arg1;
                    var11 = var2.channel;
                    var5 = undefined;
                    SaveGenerator(address=24);
 22:
                    return var5;
 24:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 230; continue _fun0001 }
 33:
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
 79:
                    return var3;
 81:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 227; continue _fun0001 }
 90:
                    if(!var3) { _fun0001_ip = 221; continue _fun0001 }
 96:
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
 139:
                    return var4;
 141:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 224; continue _fun0001 }
 147:
                    var9 = null;
                    if(!(var9 != var4)) { _fun0001_ip = 221; continue _fun0001 }
 153:
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
                    if(var12) { _fun0001_ip = 200; continue _fun0001 }
 195:
                    var10 = var11.guild_id;
 200:
                    var11 = var9 != var10;
                    var9 = null;
                    if(!var11) { _fun0001_ip = 212; continue _fun0001 }
 209:
                    var9 = var10;
 212:
                    var6['guildId'] = var9;
                    var6 = var7.bind(var8)(var6);
 221:
                    return var5;
 224:
                    return var4;
 227:
                    return var3;
 230:
                    return var2;
 233:
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
 0:
                var3 = {};
                var4 = _closure2_slot0;
                var1 = null;
                var4 = var1 != var4;
                if(!var4) { _fun0002_ip = 22; continue _fun0002 }
 18:
                var1 = _closure2_slot0;
 22:
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