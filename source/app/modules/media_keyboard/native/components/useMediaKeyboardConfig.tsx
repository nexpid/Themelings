// app/modules/media_keyboard/native/components/useMediaKeyboardConfig.tsx
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MediaKeyboardTarget;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ChannelTypesSets;
    var _closure1_slot5 = var7;
    var4 = var4.MAX_UPLOAD_COUNT;
    var _closure1_slot6 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_keyboard/native/components/useMediaKeyboardConfig.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useMediaKeyboardConfig(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var4 = var2.channel;
            var10 = var2.context;
            var _closure2_slot0 = var10;
            var7 = undefined;
            var _closure2_slot1 = var7;
            var _closure2_slot2 = var7;
            var _closure2_slot3 = var7;
            var _closure2_slot4 = var7;
            var _closure2_slot5 = var7;
            var5 = var10.target;
            var3 = _closure1_slot4;
            var3 = var3.COMMAND;
            var3 = var5 === var3;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 3;
            var5 = var8[var5];
            var6 = var6.bind(var7)(var5);
            var5 = var6.useCanPostPollsInChannel;
            var9 = var5.bind(var6)(var4);
            if(!var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = !var3;
case 2:
            _closure2_slot1 = var9;
            var6 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 4;
            var5 = var11[var5];
            var5 = var6.bind(var7)(var5);
            var8 = var5.bind(var7)(var4);
            _closure2_slot2 = var8;
            var6 = _closure1_slot0;
            var5 = 5;
            var5 = var11[var5];
            var6 = var6.bind(var7)(var5);
            var5 = var6.useCanStartThread;
            var6 = var5.bind(var6)(var4);
            if(!var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot5;
            var12 = var5.GUILD_THREADS_ONLY;
            var11 = var12.has;
            var5 = var4.type;
            var5 = var11.bind(var12)(var5);
            var6 = !var5;
case 4:
            if(!var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = var4.isThread;
            var5 = var5.bind(var4)();
            var6 = !var5;
case 6:
            if(!var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = !var3;
case 8:
            _closure2_slot3 = var6;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 6;
            var5 = var12[var5];
            var11 = var11.bind(var7)(var5);
            var5 = var11.useIsAppLauncherEnabled;
            var4 = var4.id;
            var5 = var5.bind(var11)(var4);
            if(!var5) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var5 = !var3;
case 10:
            _closure2_slot4 = var5;
            var4 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 7;
            var3 = var11[var3];
            var7 = var4.bind(var7)(var3);
            var4 = var7.getMediaKeyboardDraftType;
            var3 = var10.target;
            var7 = var4.bind(var7)(var3);
            _closure2_slot5 = var7;
            var4 = _closure1_slot3;
            var3 = var4.useMemo;
            var2 = new Array(6);
            var2[0] = var10;
            var2[1] = var9;
            var2[2] = var8;
            var2[3] = var7;
            var2[4] = var6;
            var2[5] = var5;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var4 = var1.target;
                    var1 = _closure1_slot4;
                    var1 = var1.CHAT;
                    if(!(var4 !== var1)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var1 = _closure1_slot4;
                    var1 = var1.COMMAND;
                    if(!(var4 === var1)) { _fun0002_ip = 14; continue _fun0002 }
case 12:
                    var1 = _closure1_slot4;
                    var1 = var1.COMMAND;
                    var5 = undefined;
                    var3 = undefined;
                    if(!(var4 === var1)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    var1 = _closure2_slot0;
                    var1 = var1.option;
                    var7 = var1.type;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 8;
                    var1 = var9[var1];
                    var1 = var8.bind(var5)(var1);
                    var1 = var1.ApplicationCommandOptionType;
                    var1 = var1.ATTACHMENT;
                    var3 = undefined;
                    if(!(var7 === var1)) { _fun0002_ip = 15; continue _fun0002 }
case 17:
                    var1 = _closure2_slot0;
                    var1 = var1.option;
                    var3 = var1.fileTypes;
case 15:
                    var1 = {};
                    var7 = _closure1_slot4;
                    var8 = var7.CHAT;
                    var7 = 1;
                    if(!(var4 === var8)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    var7 = _closure1_slot6;
case 18:
                    var1['uploadLimit'] = var7;
                    var6 = _closure1_slot4;
                    var7 = var6.CHAT;
                    var7 = var4 === var7;
                    var1['disableWhenReachedLimit'] = var7;
                    var6 = var6.CHAT;
                    var5 = undefined;
                    if(!(var4 !== var6)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    var6 = _closure2_slot0;
                    var6 = var6.option;
                    var7 = var6.name;
                    var6 = new Array(1);
                    var6[0] = var7;
                    var5 = var6;
case 20:
                    var1['includedUploadIds'] = var5;
                    var1['fileTypes'] = var3;
                    var3 = _closure2_slot1;
                    var1['canPostPolls'] = var3;
                    var3 = _closure2_slot3;
                    var1['canStartThreads'] = var3;
                    var3 = _closure2_slot4;
                    var1['isAppLauncherEnabled'] = var3;
                    var3 = _closure2_slot2;
                    var1['uploadDisabled'] = var3;
                    var2 = _closure2_slot5;
                    var1['draftType'] = var2;
                    return var1;
case 14:
                    var1 = global;
                    var3 = var1.Error;
                    var1 = var1.HermesInternal;
                    var2 = var1.concat;
                    var1 = 'MediaKeyboard does not support context target ';
                    var10 = var2.bind(var1)(var4);
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {constructor: {value: var3}});
                    var11 = var2;
                    var1 = new var11[var3](var10, var9);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();