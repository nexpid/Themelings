// app/modules/activities/utils/transitionToActivity.native.tsx
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
    var4 = var4.setVoiceChatDrawerState;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityPanelModes;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.VoiceChatDrawerState;
    var _closure1_slot6 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/transitionToActivity.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function transitionToActivity(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg2;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 4;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.getEmbeddedActivityLocationChannelId;
            var4 = var3.bind(var4)(var7);
            var3 = null;
            if(!(var3 != var4)) { _fun0001_ip = 373; continue _fun0001 }
 48:
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 5;
            var5 = var10[var5];
            var8 = var6.bind(var1)(var5);
            var6 = var8.isModalOpen;
            var9 = _closure1_slot1;
            var5 = 6;
            var5 = var10[var5];
            var5 = var9.bind(var1)(var5);
            var5 = var6.bind(var8)(var5);
            var5 = !var5;
            if(!var5) { _fun0001_ip = 126; continue _fun0001 }
 101:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 7;
            var6 = var9[var6];
            var6 = var8.bind(var1)(var6);
            var5 = var6.bind(var1)(var4);
 126:
            if(!var5) { _fun0001_ip = 154; continue _fun0001 }
 129:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 8;
            var5 = var8[var5];
            var5 = var6.bind(var1)(var5);
            var5 = var5.bind(var1)(var4);
 154:
            var6 = _closure1_slot4;
            var5 = var6.getSelfEmbeddedActivityForLocation;
            var11 = var5.bind(var6)(var7);
            if(!(var3 != var11)) { _fun0001_ip = 373; continue _fun0001 }
 176:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 7;
            var3 = var6[var3];
            var3 = var5.bind(var1)(var3);
            var3 = var3.bind(var1)(var4);
            if(var3) { _fun0001_ip = 250; continue _fun0001 }
 204:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 12;
            var3 = var6[var3];
            var6 = var5.bind(var1)(var3);
            var5 = var6.updateActivityPanelMode;
            var3 = _closure1_slot5;
            var3 = var3.PANEL;
            var3 = var5.bind(var6)(var3);
            _fun0001_ip = 373; continue _fun0001;
 250:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 9;
            var3 = var6[var3];
            var8 = var5.bind(var1)(var3);
            var7 = var8.selectParticipant;
            var9 = _closure1_slot0;
            var3 = 10;
            var3 = var6[var3];
            var10 = var9.bind(var1)(var3);
            var9 = var10.getEmbeddedActivityParticipantId;
            var3 = {};
            var12 = var11.applicationId;
            var3['applicationId'] = var12;
            var11 = var11.compositeInstanceId;
            var3['instanceId'] = var11;
            var3 = var9.bind(var10)(var3);
            var3 = var7.bind(var8)(var4, var3);
            var3 = 11;
            var3 = var6[var3];
            var5 = var5.bind(var1)(var3);
            var3 = var5.hideActionSheet;
            var3 = var3.bind(var5)();
            var3 = _closure1_slot3;
            var2 = _closure1_slot6;
            var2 = var2.CLOSED;
            var2 = var3.bind(var1)(var4, var2);
 373:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();