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
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/application_commands/native/ApplicationCommandUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1) {
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
            var5 = arg3;
            var1 = arg1;
            var _closure2_slot0 = var1;
            var _closure2_slot1 = var6;
            var _closure2_slot2 = var5;
            var4 = _closure1_slot4;
            var3 = var4.getUpload;
            var1 = _closure1_slot3;
            var1 = var1.SlashCommand;
            var3 = var3.bind(var4)(var6, var5, var1);
            var1 = null;
            if(!(var1 != var3)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var13 = var3.id;
            var _closure2_slot3 = var13;
            var1 = var3.item;
            var11 = var3.isVideo;
            var10 = var3.isImage;
            var4 = var1.platform;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 8;
            var3 = var7[var3];
            var8 = undefined;
            var3 = var5.bind(var8)(var3);
            var3 = var3.UploadPlatform;
            var3 = var3.REACT_NATIVE;
            if(!(var4 === var3)) { _fun0002_ip = 13; continue _fun0002 }
case 15:
            var4 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 9;
            var3 = var9[var3];
            var5 = var4.bind(var8)(var3);
            var4 = var5.openLazy;
            var7 = _closure1_slot0;
            var2 = 11;
            var2 = var9[var2];
            var14 = var7.bind(var8)(var2);
            var2 = 10;
            var3 = var9[var2];
            var2 = var9.paths;
            var3 = var14.bind(var8)(var3, var2);
            var2 = {};
            var2['id'] = var13;
            var2['source'] = var1;
            var12 = function onRemove() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var7 = var4.bind(var1)(var2);
                    var6 = var7.remove;
                    var5 = _closure2_slot1;
                    var4 = _closure2_slot3;
                    var3 = _closure1_slot3;
                    var3 = var3.SlashCommand;
                    var3 = var6.bind(var7)(var5, var4, var3);
                    var3 = _closure2_slot0;
                    var4 = null;
                    var3 = var4 == var3;
                    var6 = undefined;
                    if(var3) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var3 = _closure2_slot0;
                    var3 = var3.props;
                    var3 = var3.activeCommand;
                    var5 = var4 == var3;
                    var6 = undefined;
                    if(var5) { _fun0003_ip = 16; continue _fun0003 }
case 18:
                    var7 = var3.options;
                    var3 = var4 == var7;
                    var6 = undefined;
                    if(var3) { _fun0003_ip = 16; continue _fun0003 }
case 19:
                    var5 = var7.find;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.name;
                        var1 = _closure2_slot2;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var6 = var5.bind(var7)(var3);
case 16:
                    if(!(var4 != var6)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                    var3 = _closure2_slot0;
                    if(!(var4 != var3)) { _fun0003_ip = 20; continue _fun0003 }
case 22:
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
case 20:
                    return var1;
                }
            };
            var2['onRemove'] = var12;
            var2['isVideo'] = var11;
            var2['isImage'] = var10;
            var2['channelId'] = var6;
            var6 = 13;
            var6 = var9[var6];
            var7 = var7.bind(var8)(var6);
            var6 = var7.getType;
            var1 = var1.uri;
            var1 = var6.bind(var7)(var1);
            var2['fileType'] = var1;
            var1 = arg4;
            var2['onClose'] = var1;
            var1 = true;
            var2['disableSpoiler'] = var1;
            var2['disableRemix'] = var1;
            var1 = 'UploadPreviewActionSheet';
            var1 = var4.bind(var5)(var3, var1, var2);
case 13:
            var1 = undefined;
            return var1;
        }
    };
    var3['openCommandAttachmentPreview'] = var2;
    return var1;
})();