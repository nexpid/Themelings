// app/modules/application_commands/native/ApplicationCommandUtils.tsx
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.DraftType;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.BuiltInSectionId;
    var _closure1_slot5 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/application_commands/native/ApplicationCommandUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getApplicationCommandsIconSource(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var1 = null;
            if(!(var1 != var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var8.id;
            var3 = _closure1_slot5;
            var3 = var3.BUILT_IN;
            if(!(var3 !== var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot5;
            var3 = var3.FRECENCY;
            if(!(var3 !== var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var8.type;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 6;
            var3 = var6[var3];
            var7 = undefined;
            var3 = var5.bind(var7)(var3);
            var3 = var3.ApplicationCommandSectionType;
            var3 = var3.APPLICATION;
            if(!(var4 !== var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 7;
            var3 = var5[var3];
            var3 = var4.bind(var7)(var3);
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var4 = 3;
            var4 = var6[var4];
            var6 = var5.bind(var7)(var4);
            var5 = var6.getApplicationIconSource;
            var4 = {};
            var9 = var8.id;
            var4['id'] = var9;
            var9 = var8.icon;
            var4['icon'] = var9;
            var8 = var8.application;
            var9 = var1 == var8;
            var7 = undefined;
            if(var9) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var7 = var8.bot;
case 11:
            var4['bot'] = var7;
            var7 = true;
            var4['botIconFirst'] = var7;
            var7 = arg2;
            var4['guildMember'] = var7;
            var3 = var5.bind(var6)(var4);
case 10:
            return var3;
case 6:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 3;
            var3 = var8[var3];
            var6 = undefined;
            var5 = var7.bind(var6)(var3);
            var4 = var5.makeSource;
            var3 = 5;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var4.bind(var5)(var3);
            return var3;
case 4:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 3;
            var2 = var7[var2];
            var5 = undefined;
            var4 = var6.bind(var5)(var2);
            var3 = var4.makeSource;
            var2 = 4;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var3.bind(var4)(var2);
            return var2;
case 2:
            return var1;
        }
    };
    var3['getApplicationCommandsIconSource'] = var4;
    var2 = function openCommandAttachmentPreview(arg1, arg2, arg3, arg4) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg2;
            var7 = arg3;
            var1 = arg1;
            var _closure2_slot0 = var1;
            var _closure2_slot1 = var6;
            var _closure2_slot2 = var7;
            var4 = _closure1_slot4;
            var3 = var4.getUpload;
            var2 = _closure1_slot3;
            var2 = var2.SlashCommand;
            var4 = var3.bind(var4)(var6, var7, var2);
            var _closure2_slot3 = var4;
            var2 = null;
            if(!(var2 != var4)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 8;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var1['channelId'] = var6;
            var6 = true;
            var1['disableSpoiler'] = var6;
            var6 = arg4;
            var1['onClose'] = var6;
            var5 = function onRemove() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var7 = var4.bind(var1)(var2);
                    var6 = var7.remove;
                    var5 = _closure2_slot1;
                    var4 = _closure2_slot3;
                    var4 = var4.id;
                    var3 = _closure1_slot3;
                    var3 = var3.SlashCommand;
                    var3 = var6.bind(var7)(var5, var4, var3);
                    var3 = _closure2_slot0;
                    var4 = null;
                    var3 = var4 == var3;
                    var6 = undefined;
                    if(var3) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                    var3 = _closure2_slot0;
                    var3 = var3.props;
                    var3 = var3.activeCommand;
                    var5 = var4 == var3;
                    var6 = undefined;
                    if(var5) { _fun0003_ip = 15; continue _fun0003 }
case 17:
                    var7 = var3.options;
                    var3 = var4 == var7;
                    var6 = undefined;
                    if(var3) { _fun0003_ip = 15; continue _fun0003 }
case 18:
                    var5 = var7.find;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.name;
                        var1 = _closure2_slot2;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var6 = var5.bind(var7)(var3);
case 15:
                    if(!(var4 != var6)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    var3 = _closure2_slot0;
                    if(!(var4 != var3)) { _fun0003_ip = 19; continue _fun0003 }
case 21:
                    var5 = _closure2_slot0;
                    var4 = var5.insertOrJumpCommandOption;
                    var3 = {};
                    var2 = '';
                    var3['displayText'] = var2;
                    var9 = false;
                    var12 = var5;
                    var11 = var6;
                    var10 = undefined;
                    var8 = var3;
                    var2 = var12[var4](var11, var10, var9, var8, var7);
case 19:
                    return var1;
                }
            };
            var1['onRemove'] = var5;
            var1['upload'] = var4;
            var1 = var2.bind(var3)(var1);
case 13:
            var1 = undefined;
            return var1;
        }
    };
    var3['openCommandAttachmentPreview'] = var2;
    return var1;
})();