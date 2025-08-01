// app/modules/stage_channels/shouldShowEndStageModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/shouldShowEndStageModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function shouldShowEndStageModal(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var _closure2_slot0 = var7;
            var1 = var7.isGuildStageVoice;
            var1 = var1.bind(var7)();
            if(var1) { _fun0001_ip = 26; continue _fun0001 }
 22:
            var1 = false;
            return var1;
 26:
            var3 = _closure1_slot5;
            var2 = var3.isLive;
            var1 = var7.id;
            var1 = var2.bind(var3)(var1);
            if(var1) { _fun0001_ip = 56; continue _fun0001 }
 52:
            var1 = false;
            return var1;
 56:
            var2 = _closure1_slot2;
            var1 = var2.getId;
            var8 = var1.bind(var2)();
            var _closure2_slot1 = var8;
            var3 = _closure1_slot4;
            var2 = var3.isModerator;
            var1 = var7.id;
            var1 = var2.bind(var3)(var8, var1);
            var2 = !var1;
            var1 = !var2;
            if(var2) { _fun0001_ip = 270; continue _fun0001 }
 107:
            var5 = _closure1_slot4;
            var3 = var5.isSpeaker;
            var2 = var7.id;
            var2 = var3.bind(var5)(var8, var2);
            var3 = !var2;
            var2 = !var3;
            if(var3) { _fun0001_ip = 267; continue _fun0001 }
 140:
            var8 = _closure1_slot3;
            var5 = var8.getMutableParticipants;
            var3 = var7.id;
            var8 = var5.bind(var8)(var3);
            var5 = var8.find;
            var3 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = arg1;
                    var1 = var3.user;
                    var4 = var1.id;
                    var1 = _closure2_slot1;
                    var1 = var4 !== var1;
                    if(!var1) { _fun0002_ip = 65; continue _fun0002 }
 27:
                    var5 = _closure1_slot4;
                    var4 = var5.isModerator;
                    var3 = var3.user;
                    var3 = var3.id;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
 65:
                    return var1;
                }
            };
            var3 = var5.bind(var8)(var3);
            var5 = null;
            var3 = var5 == var3;
            if(var3) { _fun0001_ip = 264; continue _fun0001 }
 187:
            var9 = _closure1_slot3;
            var8 = var9.getMutableParticipants;
            var7 = var7.id;
            var11 = _closure1_slot0;
            var10 = _closure1_slot1;
            var6 = 4;
            var10 = var10[var6];
            var6 = undefined;
            var6 = var11.bind(var6)(var10);
            var6 = var6.StageChannelParticipantNamedIndex;
            var6 = var6.SPEAKER;
            var7 = var8.bind(var9)(var7, var6);
            var6 = var7.find;
            var4 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = arg1;
                    var1 = var3.user;
                    var4 = var1.id;
                    var1 = _closure2_slot1;
                    var1 = var4 !== var1;
                    if(!var1) { _fun0003_ip = 65; continue _fun0003 }
 27:
                    var5 = _closure1_slot4;
                    var4 = var5.isModerator;
                    var3 = var3.user;
                    var3 = var3.id;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
 65:
                    return var1;
                }
            };
            var4 = var6.bind(var7)(var4);
            var3 = var5 == var4;
 264:
            var2 = var3;
 267:
            var1 = var2;
 270:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();