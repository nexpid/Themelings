// app/modules/messages/EmbeddedApplicationInstanceUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var2 = function getJoinOrStartButtonState(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var10 = var1.embeddedActivity;
            var5 = var1.joinability;
            var9 = var1.currentEmbeddedActivity;
            var12 = var1.channel;
            var1 = null;
            var8 = var1 == var10;
            var3 = {};
            var2 = false;
            var3['disabled'] = var2;
            var2 = !var8;
            var3['isJoinAction'] = var2;
            var11 = _closure1_slot0;
            var4 = _closure1_slot1;
            var7 = 1;
            var13 = var4[var7];
            var6 = undefined;
            var13 = var11.bind(var6)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var4 = var4[var7];
            var4 = var11.bind(var6)(var4);
            var11 = var4.t;
            if(var8) { _fun0001_ip = 117; continue _fun0001 }
 102:
            var4 = var11.sqe0ho;
            var4 = var13.bind(var14)(var4);
            _fun0001_ip = 128; continue _fun0001;
 117:
            var11 = var11.I0v0Qk;
            var4 = var13.bind(var14)(var11);
 128:
            var3['text'] = var4;
            var3['tooltip'] = var6;
            var11 = _closure1_slot0;
            var13 = _closure1_slot1;
            var4 = 2;
            var4 = var13[var4];
            var11 = var11.bind(var6)(var4);
            var4 = var11.isActivitiesInTextEnabled;
            var4 = var4.bind(var11)(var12);
            if(!(var1 != var10)) { _fun0001_ip = 195; continue _fun0001 }
 172:
            if(!(var1 != var9)) { _fun0001_ip = 195; continue _fun0001 }
 176:
            var10 = var10.launchId;
            var9 = var9.launchId;
            if(!(var10 !== var9)) { _fun0001_ip = 1114; continue _fun0001 }
 195:
            if(var8) { _fun0001_ip = 1022; continue _fun0001 }
 201:
            if(!(var1 != var5)) { _fun0001_ip = 241; continue _fun0001 }
 205:
            var8 = _closure1_slot0;
            var1 = _closure1_slot1;
            var9 = 3;
            var1 = var1[var9];
            var1 = var8.bind(var6)(var1);
            var1 = var1.EmbeddedActivityJoinability;
            var1 = var1.CAN_JOIN;
            if(!(var5 === var1)) { _fun0001_ip = 243; continue _fun0001 }
 241:
            return var3;
 243:
            var8 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var9];
            var1 = var8.bind(var6)(var1);
            var1 = var1.EmbeddedActivityJoinability;
            var1 = var1.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION;
            if(!(var1 !== var5)) { _fun0001_ip = 936; continue _fun0001 }
 279:
            var8 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var9];
            var1 = var8.bind(var6)(var1);
            var1 = var1.EmbeddedActivityJoinability;
            var1 = var1.ACTIVITY_AGE_GATED;
            if(!(var1 !== var5)) { _fun0001_ip = 882; continue _fun0001 }
 315:
            var8 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var9];
            var1 = var8.bind(var6)(var1);
            var1 = var1.EmbeddedActivityJoinability;
            var1 = var1.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS;
            if(!(var1 !== var5)) { _fun0001_ip = 828; continue _fun0001 }
 351:
            var8 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var9];
            var1 = var8.bind(var6)(var1);
            var1 = var1.EmbeddedActivityJoinability;
            var1 = var1.ACTIVITY_NOT_SUPPORTED_ON_OS;
            if(!(var1 !== var5)) { _fun0001_ip = 771; continue _fun0001 }
 387:
            var8 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var9];
            var1 = var8.bind(var6)(var1);
            var1 = var1.EmbeddedActivityJoinability;
            var1 = var1.CHANNEL_FULL;
            if(!(var1 !== var5)) { _fun0001_ip = 714; continue _fun0001 }
 423:
            var8 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var9];
            var1 = var8.bind(var6)(var1);
            var1 = var1.EmbeddedActivityJoinability;
            var1 = var1.NO_CHANNEL_CONNECT_PERMISSION;
            if(!(var1 !== var5)) { _fun0001_ip = 655; continue _fun0001 }
 459:
            var8 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var9];
            var1 = var8.bind(var6)(var1);
            var1 = var1.EmbeddedActivityJoinability;
            var1 = var1.NO_CHANNEL;
            if(!(var1 !== var5)) { _fun0001_ip = 596; continue _fun0001 }
 492:
            var8 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var9];
            var1 = var8.bind(var6)(var1);
            var1 = var1.EmbeddedActivityJoinability;
            var1 = var1.NO_GUILD;
            if(!(var1 !== var5)) { _fun0001_ip = 596; continue _fun0001 }
 525:
            var8 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var9];
            var1 = var8.bind(var6)(var1);
            var1 = var1.EmbeddedActivityJoinability;
            var1 = var1.NO_USER;
            if(!(var1 !== var5)) { _fun0001_ip = 596; continue _fun0001 }
 558:
            var8 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var9];
            var1 = var8.bind(var6)(var1);
            var1 = var1.EmbeddedActivityJoinability;
            var1 = var1.IS_AFK_CHANNEL;
            var8 = undefined;
            if(!(var1 === var5)) { _fun0001_ip = 988; continue _fun0001 }
 596:
            var10 = _closure1_slot0;
            var1 = _closure1_slot1;
            var5 = var1[var7];
            var5 = var10.bind(var6)(var5);
            var9 = var5.intl;
            var5 = var9.string;
            var1 = var1[var7];
            var1 = var10.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.Etp6uL;
            var8 = var5.bind(var9)(var1);
            _fun0001_ip = 988; continue _fun0001;
 655:
            var10 = _closure1_slot0;
            var1 = _closure1_slot1;
            var5 = var1[var7];
            var5 = var10.bind(var6)(var5);
            var9 = var5.intl;
            var5 = var9.string;
            var1 = var1[var7];
            var1 = var10.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.w5SApq;
            var8 = var5.bind(var9)(var1);
            _fun0001_ip = 988; continue _fun0001;
 714:
            var10 = _closure1_slot0;
            var1 = _closure1_slot1;
            var5 = var1[var7];
            var5 = var10.bind(var6)(var5);
            var9 = var5.intl;
            var5 = var9.string;
            var1 = var1[var7];
            var1 = var10.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.rZfiNj;
            var8 = var5.bind(var9)(var1);
            _fun0001_ip = 988; continue _fun0001;
 771:
            var10 = _closure1_slot0;
            var1 = _closure1_slot1;
            var5 = var1[var7];
            var5 = var10.bind(var6)(var5);
            var9 = var5.intl;
            var5 = var9.string;
            var1 = var1[var7];
            var1 = var10.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.UXoQTk;
            var8 = var5.bind(var9)(var1);
            _fun0001_ip = 988; continue _fun0001;
 828:
            var10 = _closure1_slot0;
            var1 = _closure1_slot1;
            var5 = var1[var7];
            var5 = var10.bind(var6)(var5);
            var9 = var5.intl;
            var5 = var9.string;
            var1 = var1[var7];
            var1 = var10.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.uGDCc3;
            var8 = var5.bind(var9)(var1);
            _fun0001_ip = 988; continue _fun0001;
 882:
            var10 = _closure1_slot0;
            var1 = _closure1_slot1;
            var5 = var1[var7];
            var5 = var10.bind(var6)(var5);
            var9 = var5.intl;
            var5 = var9.string;
            var1 = var1[var7];
            var1 = var10.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.4WuFRE;
            var8 = var5.bind(var9)(var1);
            _fun0001_ip = 988; continue _fun0001;
 936:
            var10 = _closure1_slot0;
            var1 = _closure1_slot1;
            var5 = var1[var7];
            var5 = var10.bind(var6)(var5);
            var9 = var5.intl;
            var5 = var9.string;
            var1 = var1[var7];
            var1 = var10.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.hHGrW1;
            var8 = var5.bind(var9)(var1);
 988:
            var1 = {};
            var17 = var1;
            var16 = var3;
            var5 = copyDataProperties(var17, var16);
            var9 = true;
            var5 = 'disabled';
            var1[var5] = var9;
            var5 = 'tooltip';
            var1[var5] = var8;
            return var1;
 1022:
            var1 = {};
            var17 = var1;
            var16 = var3;
            var5 = copyDataProperties(var17, var16);
            var8 = !var4;
            var5 = 'disabled';
            var1[var5] = var8;
            var5 = undefined;
            if(var4) { _fun0001_ip = 1103; continue _fun0001 }
 1051:
            var10 = _closure1_slot0;
            var4 = _closure1_slot1;
            var8 = var4[var7];
            var8 = var10.bind(var6)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var4 = var4[var7];
            var4 = var10.bind(var6)(var4);
            var4 = var4.t;
            var4 = var4.f41E1t;
            var5 = var8.bind(var9)(var4);
 1103:
            var4 = 'tooltip';
            var1[var4] = var5;
            return var1;
 1114:
            var1 = {};
            var17 = var1;
            var16 = var3;
            var3 = copyDataProperties(var17, var16);
            var4 = true;
            var3 = 'disabled';
            var1[var3] = var4;
            var5 = _closure1_slot0;
            var2 = _closure1_slot1;
            var3 = var2[var7];
            var3 = var5.bind(var6)(var3);
            var8 = var3.intl;
            var4 = var8.string;
            var3 = var2[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.DPfdsr;
            var4 = var4.bind(var8)(var3);
            var3 = 'text';
            var1[var3] = var4;
            var3 = var2[var7];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var2[var7];
            var2 = var5.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.wJNK8P;
            var3 = var3.bind(var4)(var2);
            var2 = 'tooltip';
            var1[var2] = var3;
            return var1;
        }
    };
    var _closure1_slot3 = var2;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var5);
    var9 = 0;
    var6 = var8[var9];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var6);
    var _closure1_slot2 = var5;
    var5 = {};
    var5['ACTIVE'] = var9;
    var6 = 'ACTIVE';
    var5[var9] = var6;
    var9 = 1;
    var5['ENDED'] = var9;
    var6 = 'ENDED';
    var5[var9] = var6;
    var6 = 4;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/messages/EmbeddedApplicationInstanceUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['EmbedStates'] = var5;
    var4 = function useJoinOrStartButtonState(arg1) {
        var2 = arg1;
        var8 = var2.embeddedActivity;
        var _closure2_slot0 = var8;
        var7 = var2.joinability;
        var _closure2_slot1 = var7;
        var6 = var2.currentEmbeddedActivity;
        var _closure2_slot2 = var6;
        var5 = var2.channel;
        var _closure2_slot3 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(4);
        var2[0] = var8;
        var2[1] = var7;
        var2[2] = var6;
        var2[3] = var5;
        var1 = function() {
            var3 = _closure1_slot3;
            var2 = {};
            var4 = _closure2_slot0;
            var2['embeddedActivity'] = var4;
            var4 = _closure2_slot1;
            var2['joinability'] = var4;
            var4 = _closure2_slot2;
            var2['currentEmbeddedActivity'] = var4;
            var1 = _closure2_slot3;
            var2['channel'] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useJoinOrStartButtonState'] = var4;
    var3['getJoinOrStartButtonState'] = var2;
    return var1;
})();