// app/modules/guild_scheduled_events/native/components/EditGuildEventRecurrenceModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 5;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_PRIMARY;
    var9['backgroundColor'] = var10;
    var4['cardStyle'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = {};
    var7 = 'TIME';
    var4['TIME'] = var7;
    var _closure1_slot10 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_scheduled_events/native/components/EditGuildEventRecurrenceModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function EditGuildEventRecurrenceModal(arg1) {
        var1 = arg1;
        var12 = var1.guildEvent;
        var _closure2_slot0 = var12;
        var2 = var1.onCloseModal;
        var _closure2_slot1 = var2;
        var11 = var1.recurrenceId;
        var _closure2_slot2 = var11;
        var2 = _closure1_slot9;
        var4 = undefined;
        var5 = var2.bind(var4)();
        var14 = _closure1_slot1;
        var8 = _closure1_slot3;
        var2 = 6;
        var2 = var8[var2];
        var3 = var14.bind(var4)(var2);
        var2 = var12.id;
        var9 = var3.bind(var4)(var11, var2);
        var _closure2_slot3 = var9;
        var2 = _closure1_slot0;
        var3 = 7;
        var6 = var8[var3];
        var7 = var2.bind(var4)(var6);
        var6 = var7.getBaseScheduleForRecurrence;
        var7 = var6.bind(var7)(var11, var12);
        var3 = var8[var3];
        var6 = var2.bind(var4)(var3);
        var3 = var6.getScheduleForRecurrenceWithException;
        var6 = var3.bind(var6)(var7, var9);
        var _closure2_slot4 = var6;
        var13 = _closure1_slot6;
        var3 = var13.useState;
        var3 = var3.bind(var13)(var6);
        var15 = _closure1_slot5;
        var12 = 2;
        var3 = var15.bind(var4)(var3, var12);
        var7 = 0;
        var6 = var3[var7];
        var _closure2_slot5 = var6;
        var6 = 1;
        var3 = var3[var6];
        var _closure2_slot6 = var3;
        var3 = var13.useState;
        var11 = null;
        var3 = var3.bind(var13)(var11);
        var3 = var15.bind(var4)(var3, var12);
        var9 = var3[var7];
        var _closure2_slot7 = var9;
        var3 = var3[var6];
        var _closure2_slot8 = var3;
        var3 = 8;
        var3 = var8[var3];
        var16 = var14.bind(var4)(var3);
        var3 = function() {
            var4 = _closure1_slot2;
            var3 = _closure1_slot3;
            var2 = 9;
            var2 = var3[var2];
            var6 = undefined;
            var4 = var4.bind(var6)(var2);
            var2 = var4.dismissGlobalKeyboard;
            var2 = var2.bind(var4)();
            var2 = _closure1_slot1;
            var1 = 10;
            var1 = var3[var1];
            var5 = var2.bind(var6)(var1);
            var10 = _closure2_slot0;
            var9 = _closure2_slot2;
            var8 = _closure2_slot5;
            var7 = _closure2_slot3;
            var11 = undefined;
            var1 = var11[var5](var10, var9, var8, var7, var6);
            return var1;
        };
        var3 = var16.bind(var4)(var3);
        var3 = var15.bind(var4)(var3, var12);
        var7 = var3[var7];
        var _closure2_slot9 = var7;
        var3 = var3[var6];
        var3 = var3.error;
        var _closure2_slot10 = var3;
        var6 = function() {
            var4 = _closure1_slot4;
            var3 = undefined;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0001_ip = 106; continue _fun0001 }
 7:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var2 = 7;
                        var3 = var3[var2];
                        var2 = undefined;
                        var7 = var4.bind(var2)(var3);
                        var6 = var7.areSchedulesIdentical;
                        var5 = _closure2_slot5;
                        var4 = _closure2_slot4;
                        var4 = var6.bind(var7)(var5, var4);
                        if(var4) { _fun0001_ip = 95; continue _fun0001 }
 58:
                        var4 = _closure2_slot9;
                        var4 = var4.bind(var2)();
                        SaveGenerator(address=70);
 68:
                        return var4;
 70:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                        if(var5) { _fun0001_ip = 92; continue _fun0001 }
 76:
                        var5 = null;
                        if(!(var5 != var4)) { _fun0001_ip = 103; continue _fun0001 }
 82:
                        var5 = _closure2_slot1;
                        var5 = var5.bind(var2)();
                        _fun0001_ip = 103; continue _fun0001;
 92:
                        return var4;
 95:
                        var3 = _closure2_slot1;
                        var3 = var3.bind(var2)();
 103:
                        return var2;
 106:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var4.bind(var3)(var2);
            var _closure3_slot0 = var2;
            var1 = function() {
                var1 = undefined;
                var4 = _closure3_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            return var1;
        };
        var12 = var6.bind(var4)();
        var6 = function handleScheduleChange(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = arg1;
                var6 = var1.startDate;
                var1 = var1.endDate;
                var3 = null;
                var2 = var3 != var6;
                if(!var2) { _fun0002_ip = 28; continue _fun0002 }
 24:
                var2 = var3 != var1;
 28:
                if(!var2) { _fun0002_ip = 42; continue _fun0002 }
 31:
                var4 = var1.isBefore;
                var2 = var4.bind(var1)(var6);
 42:
                if(!var2) { _fun0002_ip = 73; continue _fun0002 }
 45:
                var2 = var6.clone;
                var7 = var2.bind(var6)();
                var5 = var7.add;
                var4 = 1;
                var2 = 'hour';
                var1 = var5.bind(var7)(var4, var2);
 73:
                var5 = _closure2_slot6;
                var4 = {};
                var4['startDate'] = var6;
                var4['endDate'] = var1;
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                var2 = _closure2_slot8;
                var2 = var2.bind(var1)(var3);
                return var1;
            }
        };
        var _closure2_slot11 = var6;
        var7 = var13.useEffect;
        var6 = new Array(1);
        var6[0] = var3;
        var3 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = _closure2_slot8;
                var1 = _closure2_slot10;
                var2 = null;
                var6 = var2 == var1;
                var1 = undefined;
                var4 = undefined;
                if(var6) { _fun0003_ip = 38; continue _fun0003 }
 24:
                var6 = _closure2_slot10;
                var5 = var6.getAnyErrorMessage;
                var4 = var5.bind(var6)();
 38:
                var5 = var2 != var4;
                var2 = null;
                if(!var5) { _fun0003_ip = 50; continue _fun0003 }
 47:
                var2 = var4;
 50:
                var2 = var3.bind(var1)(var2);
                return var1;
            }
        };
        var3 = var7.bind(var13)(var3, var6);
        var3 = _closure1_slot7;
        var13 = 11;
        var6 = var8[var13];
        var7 = var14.bind(var4)(var6);
        var6 = {};
        var13 = var8[var13];
        var13 = var14.bind(var4)(var13);
        var13 = var13.Sizes;
        var13 = var13.MEDIUM;
        var6['size'] = var13;
        var13 = 12;
        var14 = var8[var13];
        var14 = var2.bind(var4)(var14);
        var15 = var14.intl;
        var14 = var15.string;
        var13 = var8[var13];
        var13 = var2.bind(var4)(var13);
        var13 = var13.t;
        var13 = var13.R3BPHx;
        var13 = var14.bind(var15)(var13);
        var6['text'] = var13;
        var6['onPress'] = var12;
        var9 = var11 != var9;
        var6['disabled'] = var9;
        var6 = var3.bind(var4)(var7, var6);
        var _closure2_slot12 = var6;
        var7 = {};
        var6 = _closure1_slot10;
        var9 = var6.TIME;
        var1 = {};
        var11 = '';
        var1['title'] = var11;
        var11 = function customNavbar() {
            var4 = _closure1_slot7;
            var2 = _closure1_slot1;
            var7 = _closure1_slot3;
            var1 = 13;
            var1 = var7[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var6 = _closure1_slot0;
            var5 = 14;
            var5 = var7[var5];
            var5 = var6.bind(var3)(var5);
            var5 = var5.EditGuildEventScreens;
            var5 = var5.DETAILS;
            var1['screen'] = var5;
            var5 = _closure2_slot1;
            var1['onClose'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var1['customNavbar'] = var11;
        var11 = function headerLeft() {
            var1 = null;
            return var1;
        };
        var1['headerLeft'] = var11;
        var10 = function render() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var4 = _closure1_slot8;
                var6 = _closure1_slot1;
                var9 = _closure1_slot3;
                var1 = 15;
                var1 = var9[var1];
                var3 = undefined;
                var2 = var6.bind(var3)(var1);
                var1 = {};
                var5 = _closure2_slot12;
                var1['action'] = var5;
                var8 = _closure1_slot7;
                var5 = 16;
                var5 = var9[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var9 = _closure2_slot0;
                var5['guildEvent'] = var9;
                var9 = _closure2_slot2;
                var5['recurrenceId'] = var9;
                var9 = _closure2_slot5;
                var5['schedule'] = var9;
                var9 = _closure2_slot11;
                var5['onChange'] = var9;
                var6 = var8.bind(var3)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure2_slot7;
                var6 = null;
                var8 = var6 != var8;
                if(!var8) { _fun0004_ip = 180; continue _fun0004 }
 123:
                var9 = _closure1_slot7;
                var8 = _closure1_slot0;
                var11 = _closure1_slot3;
                var7 = 17;
                var7 = var11[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.Text;
                var7 = {'variant': 'text-md/normal', 'color': 'status-danger'};
                var10 = _closure2_slot7;
                var7['children'] = var10;
                var6 = var9.bind(var3)(var8, var7);
 180:
                var5[1] = var6;
                var1['children'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            }
        };
        var1['render'] = var10;
        var10 = true;
        var1['fullscreen'] = var10;
        var7[var9] = var1;
        var1 = 18;
        var1 = var8[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.Navigator;
        var1 = {};
        var1['screens'] = var7;
        var6 = var6.TIME;
        var1['initialRouteName'] = var6;
        var6 = false;
        var1['cardShadowEnabled'] = var6;
        var1['cardOverlayEnabled'] = var6;
        var5 = var5.cardStyle;
        var1['cardStyle'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();