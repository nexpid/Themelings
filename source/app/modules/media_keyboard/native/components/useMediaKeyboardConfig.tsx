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
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_keyboard/native/components/useMediaKeyboardConfig.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useMediaKeyboardConfig(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = var2.channel;
            var10 = var2.context;
            var _closure2_slot0 = var10;
            var7 = undefined;
            var _closure2_slot3 = var7;
            var _closure2_slot4 = var7;
            var _closure2_slot5 = var7;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 3;
            var4 = var6[var4];
            var8 = var5.bind(var7)(var4);
            var4 = var8.useCanPostPollsInChannel;
            var9 = var4.bind(var8)(var3);
            var _closure2_slot1 = var9;
            var8 = _closure1_slot1;
            var4 = 4;
            var4 = var6[var4];
            var4 = var8.bind(var7)(var4);
            var8 = var4.bind(var7)(var3);
            var _closure2_slot2 = var8;
            var4 = 5;
            var4 = var6[var4];
            var5 = var5.bind(var7)(var4);
            var4 = var5.useCanStartThread;
            var6 = var4.bind(var5)(var3);
            if(!var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot5;
            var11 = var4.GUILD_THREADS_ONLY;
            var5 = var11.has;
            var4 = var3.type;
            var4 = var5.bind(var11)(var4);
            var6 = !var4;
case 2:
            if(!var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var3.isThread;
            var4 = var4.bind(var3)();
            var6 = !var4;
case 4:
            _closure2_slot3 = var6;
            var4 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 6;
            var5 = var11[var5];
            var12 = var4.bind(var7)(var5);
            var5 = var12.useIsAppLauncherEnabled;
            var3 = var3.id;
            var5 = var5.bind(var12)(var3);
            _closure2_slot4 = var5;
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
                    if(!(var4 !== var1)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var1 = _closure1_slot4;
                    var1 = var1.COMMAND;
                    if(!(var4 === var1)) { _fun0002_ip = 8; continue _fun0002 }
case 6:
                    var1 = {};
                    var3 = _closure1_slot4;
                    var7 = var3.CHAT;
                    var6 = undefined;
                    if(!(var4 !== var7)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var7 = _closure2_slot0;
                    var7 = var7.option;
                    var6 = var7.displayName;
case 9:
                    var1['title'] = var6;
                    var6 = _closure1_slot4;
                    var7 = var6.CHAT;
                    var6 = undefined;
                    if(!(var4 !== var7)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var7 = _closure2_slot0;
                    var7 = var7.option;
                    var6 = var7.displayDescription;
case 11:
                    var1['subtitle'] = var6;
                    var6 = _closure1_slot4;
                    var7 = var6.CHAT;
                    var6 = 1;
                    if(!(var4 === var7)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var6 = _closure1_slot6;
case 13:
                    var1['uploadLimit'] = var6;
                    var5 = _closure1_slot4;
                    var6 = var5.CHAT;
                    var6 = var4 === var6;
                    var1['disableWhenReachedLimit'] = var6;
                    var5 = var5.CHAT;
                    var3 = undefined;
                    if(!(var4 !== var5)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    var5 = _closure2_slot0;
                    var5 = var5.option;
                    var6 = var5.name;
                    var5 = new Array(1);
                    var5[0] = var6;
                    var3 = var5;
case 15:
                    var1['includedUploadIds'] = var3;
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
case 8:
                    var1 = global;
                    var3 = var1.Error;
                    var1 = var1.HermesInternal;
                    var2 = var1.concat;
                    var1 = 'MediaKeyboard does not support context target ';
                    var8 = var2.bind(var1)(var4);
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {constructor: {value: var3}});
                    var9 = var2;
                    var1 = new var9[var3](var8, var7);
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