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
 0:
            var8 = arg1;
            var1 = null;
            if(!(var1 != var8)) { _fun0001_ip = 298; continue _fun0001 }
 12:
            var4 = var8.id;
            var3 = _closure1_slot5;
            var3 = var3.BUILT_IN;
            if(!(var3 !== var4)) { _fun0001_ip = 251; continue _fun0001 }
 37:
            var3 = _closure1_slot5;
            var3 = var3.FRECENCY;
            if(!(var3 !== var4)) { _fun0001_ip = 204; continue _fun0001 }
 54:
            var4 = var8.type;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 6;
            var3 = var6[var3];
            var7 = undefined;
            var3 = var5.bind(var7)(var3);
            var3 = var3.ApplicationCommandSectionType;
            var3 = var3.APPLICATION;
            if(!(var4 !== var3)) { _fun0001_ip = 119; continue _fun0001 }
 97:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 7;
            var3 = var5[var3];
            var3 = var4.bind(var7)(var3);
            _fun0001_ip = 202; continue _fun0001;
 119:
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
            if(var9) { _fun0001_ip = 185; continue _fun0001 }
 179:
            var7 = var8.bot;
 185:
            var4['bot'] = var7;
            var7 = true;
            var4['botIconFirst'] = var7;
            var3 = var5.bind(var6)(var4);
 202:
            return var3;
 204:
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
 251:
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
 298:
            return var1;
        }
    };
    var3['getApplicationCommandsIconSource'] = var4;
    var2 = function openCommandAttachmentPreview(arg1, arg2, arg3, arg4) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
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
            if(!(var1 != var3)) { _fun0002_ip = 295; continue _fun0002 }
 62:
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
            if(!(var4 === var3)) { _fun0002_ip = 295; continue _fun0002 }
 135:
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
 0:
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
                    if(var3) { _fun0003_ip = 130; continue _fun0003 }
 74:
                    var3 = _closure2_slot0;
                    var3 = var3.props;
                    var3 = var3.activeCommand;
                    var5 = var4 == var3;
                    var6 = undefined;
                    if(var5) { _fun0003_ip = 130; continue _fun0003 }
 98:
                    var7 = var3.options;
                    var3 = var4 == var7;
                    var6 = undefined;
                    if(var3) { _fun0003_ip = 130; continue _fun0003 }
 112:
                    var5 = var7.find;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.name;
                        var1 = _closure2_slot2;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var6 = var5.bind(var7)(var3);
 130:
                    if(!(var4 != var6)) { _fun0003_ip = 180; continue _fun0003 }
 134:
                    var3 = _closure2_slot0;
                    if(!(var4 != var3)) { _fun0003_ip = 180; continue _fun0003 }
 142:
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
 180:
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
 295:
            var1 = undefined;
            return var1;
        }
    };
    var3['openCommandAttachmentPreview'] = var2;
    return var1;
})();