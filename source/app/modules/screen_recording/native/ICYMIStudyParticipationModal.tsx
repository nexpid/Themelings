// app/modules/screen_recording/native/ICYMIStudyParticipationModal.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useScreenRecordingStore;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/screen_recording/native/ICYMIStudyParticipationModal.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function ICYMIStudyParticipationModal() {
        var4 = _closure1_slot5;
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 10;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = {};
        var5 = 'ICYMI Study Participation';
        var1['title'] = var5;
        var5 = function onParticipate() {
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 7;
            var3 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var3);
            var3 = var5.pop;
            var3 = var3.bind(var5)();
            var3 = _closure1_slot0;
            var2 = 11;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.handleRecordingPhase;
            var2 = 'icymi';
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['onParticipate'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['default'] = var4;
    var2 = function startICYMIScreenRecordingFlow() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot4;
            var1 = var3.getState;
            var1 = var1.bind(var3)();
            var1 = var1.isRecording;
            if(var1) { _fun0001_ip = 106; continue _fun0001 }
 26:
            var4 = _closure1_slot3;
            var3 = var4.lastTakenICYMISurvey;
            var4 = var3.bind(var4)();
            var3 = global;
            var5 = var3.Date;
            var3 = var5.now;
            var5 = var3.bind(var5)();
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 4;
            var6 = var6[var3];
            var3 = undefined;
            var3 = var7.bind(var3)(var6);
            var3 = var3.Millis;
            var6 = var3.DAY;
            var3 = 30;
            var3 = var3 * var6;
            var3 = var5 - var3;
            var1 = var4 > var3;
 106:
            if(var1) { _fun0001_ip = 266; continue _fun0001 }
 112:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 5;
            var1 = var4[var1];
            var6 = undefined;
            var1 = var3.bind(var6)(var1);
            var4 = var1.ICYMIScreenRecordingExperiment;
            var3 = var4.getConfig;
            var1 = {};
            var5 = 'ICYMI';
            var1['location'] = var5;
            var1 = var3.bind(var4)(var1);
            var1 = var1.enabled;
            if(!var1) { _fun0001_ip = 266; continue _fun0001 }
 169:
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var3 = 6;
            var3 = var1[var3];
            var5 = var4.bind(var6)(var3);
            var3 = var5.takeSurvey;
            var3 = var3.bind(var5)();
            var3 = 7;
            var3 = var1[var3];
            var5 = var4.bind(var6)(var3);
            var4 = var5.pushLazy;
            var3 = _closure1_slot0;
            var2 = 9;
            var2 = var1[var2];
            var3 = var3.bind(var6)(var2);
            var2 = 8;
            var2 = var1[var2];
            var1 = var1.paths;
            var3 = var3.bind(var6)(var2, var1);
            var2 = {};
            var1 = 'ICYMI_STUDY_PARTICIPATION_MODAL_KEY';
            var1 = var4.bind(var5)(var3, var2, var1);
 266:
            var1 = undefined;
            return var1;
        }
    };
    var3['startICYMIScreenRecordingFlow'] = var2;
    return var1;
})();