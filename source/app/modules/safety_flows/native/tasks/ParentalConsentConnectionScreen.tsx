// app/modules/safety_flows/native/tasks/ParentalConsentConnectionScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CONNECT_GUARDIAN_BOTTOM_SHEET_KEY;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var11 = 8;
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_24;
    var9['marginTop'] = var10;
    var4['body'] = var9;
    var9 = {};
    var10 = 'center';
    var9['alignItems'] = var10;
    var4['cardSection'] = var9;
    var9 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_12;
    var9['marginTop'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.space;
    var11 = var11.PX_24;
    var9['marginBottom'] = var11;
    var9['textAlign'] = var10;
    var4['cardTitle'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 30;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/safety_flows/native/tasks/ParentalConsentConnectionScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ParentalConsentConnectionScreen() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot11;
            var4 = undefined;
            var25 = var2.bind(var4)();
            var10 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 9;
            var2 = var8[var2];
            var3 = var10.bind(var4)(var2);
            var2 = var3.useOnTaskComplete;
            var11 = var2.bind(var3)();
            var _closure2_slot0 = var11;
            var2 = 10;
            var2 = var8[var2];
            var3 = var10.bind(var4)(var2);
            var2 = var3.useSafetyFlowTask;
            var2 = var2.bind(var3)();
            var2 = var2.task;
            var3 = 11;
            var3 = var8[var3];
            var5 = var10.bind(var4)(var3);
            var3 = var5.useFamilyCenterActions;
            var3 = var3.bind(var5)();
            var19 = var3.getLinkCode;
            var _closure2_slot1 = var19;
            var2 = var2.ui_component;
            var7 = var2.component;
            var6 = null;
            if(!(var6 == var7)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = {};
case 2:
            var2 = {};
            var5 = var7.link_code;
            var3 = '';
            var12 = 'string';
            var13 = typeof var5;
            var5 = var3;
            if(!(var12 === var13)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var7.link_code;
case 4:
            var2['link_code'] = var5;
            var5 = var7.link_code_expires_at;
            var5 = typeof var5;
            if(!(var12 === var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var7.link_code_expires_at;
case 6:
            var2['link_code_expires_at'] = var3;
            var5 = global;
            var13 = var5.Array;
            var12 = var13.isArray;
            var3 = var7.pending_requests;
            var3 = var12.bind(var13)(var3);
            if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = new Array(0);
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var3 = var7.pending_requests;
case 10:
            var2['pending_requests'] = var3;
            var7 = 12;
            var3 = var8[var7];
            var12 = var10.bind(var4)(var3);
            var3 = var12.usePendingRequestCount;
            var3 = var3.bind(var12)();
            var7 = var8[var7];
            var12 = var10.bind(var4)(var7);
            var7 = var12.useHasActiveParentLinks;
            var31 = var7.bind(var12)();
            var18 = 13;
            var7 = var8[var18];
            var15 = var10.bind(var4)(var7);
            var14 = var15.useStateFromStores;
            var7 = _closure1_slot7;
            var13 = new Array(1);
            var13[0] = var7;
            var12 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getLinkedUsers;
                var1 = var1.bind(var2)();
                return var1;
            };
            var12 = var14.bind(var15)(var13, var12);
            var8 = var8[var18];
            var13 = var10.bind(var4)(var8);
            var10 = var13.useStateFromStores;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getAreLinkedUsersProcessed;
                var1 = var1.bind(var2)();
                return var1;
            };
            var13 = var10.bind(var13)(var8, var7);
            if(var13) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var7 = var2.pending_requests;
            var8 = var7.length;
            var7 = 0;
            var7 = var8 > var7;
            _fun0001_ip = 13; continue _fun0001;
case 11:
            var10 = var5.Object;
            var8 = var10.values;
            var12 = var8.bind(var10)(var12);
            var10 = var12.some;
            var8 = function(arg1) {
                var2 = null;
                var1 = arg1;
                var1 = var2 != var1;
                return var1;
            };
            var7 = var10.bind(var12)(var8);
case 13:
            var15 = var3;
            if(var13) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var3 = var2.pending_requests;
            var15 = var3.length;
case 14:
            var8 = _closure1_slot5;
            var3 = var8.useState;
            var8 = var3.bind(var8)(var7);
            var3 = _closure1_slot4;
            var16 = 2;
            var12 = var3.bind(var4)(var8, var16);
            var10 = 0;
            var8 = var12[var10];
            var3 = 1;
            var12 = var12[var3];
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = !var8;
case 16:
            if(!var7) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = true;
            var7 = var12.bind(var4)(var7);
case 18:
            var17 = _closure1_slot0;
            var14 = _closure1_slot2;
            var7 = var14[var18];
            var22 = var17.bind(var4)(var7);
            var21 = var22.useStateFromStores;
            var7 = _closure1_slot7;
            var20 = new Array(1);
            var20[0] = var7;
            var12 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getLinkCode;
                var1 = var1.bind(var2)();
                return var1;
            };
            var21 = var21.bind(var22)(var20, var12);
            var14 = var14[var18];
            var18 = var17.bind(var4)(var14);
            var17 = var18.useStateFromStores;
            var14 = new Array(1);
            var14[0] = var7;
            var7 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getLinkCodeExpiresAt;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var17.bind(var18)(var14, var7);
            if(!(var6 == var21)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var21 = var2.link_code;
case 20:
            var _closure2_slot2 = var21;
            var20 = var7;
            if(!(var6 == var20)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var7 = var5.Date;
            var6 = var7.parse;
            var5 = var2.link_code_expires_at;
            var20 = var6.bind(var7)(var5);
case 22:
            var _closure2_slot3 = var20;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var6 = 14;
            var6 = var5[var6];
            var12 = var7.bind(var4)(var6);
            var6 = var12.useDerivedPendingRequests;
            var2 = var2.pending_requests;
            var14 = var6.bind(var12)(var2, var13);
            var6 = _closure1_slot5;
            var12 = var6.useState;
            var2 = false;
            var12 = var12.bind(var6)(var2);
            var2 = _closure1_slot4;
            var2 = var2.bind(var4)(var12, var16);
            var30 = var2[var10];
            var2 = var2[var3];
            var _closure2_slot4 = var2;
            var10 = var6.useCallback;
            var3 = _closure1_slot3;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                        var4 = _closure2_slot4;
                        var5 = undefined;
                        var2 = true;
                        var2 = var4.bind(var5)(var2);
case 26: // try_start_0 // try_start_1
                        var4 = _closure2_slot0;
                        var2 = {};
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var6 = 15;
                        var6 = var8[var6];
                        var6 = var7.bind(var5)(var6);
                        var6 = var6.TaskInputType;
                        var6 = var6.Empty;
                        var2['type'] = var6;
                        var2 = var4.bind(var5)(var2);
                        SaveGenerator(address=80);
case 27:
                        return var2;
case 28:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0002_ip = 29; continue _fun0002 }
case 30: // try_end0
                        _fun0002_ip = 31; continue _fun0002;
case 29: // try_end1
                        var6 = _closure2_slot4;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
                        return var2;
case 32: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=1);
                        var10 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var2 = 16;
                        var2 = var11[var2];
                        var6 = var10.bind(var5)(var2);
                        var4 = var6.open;
                        var2 = {};
                        var8 = 'SAFETY_FLOWS_PARENTAL_CONSENT_CONNECTION_ERROR';
                        var2['key'] = var8;
                        var8 = _closure1_slot0;
                        var7 = 17;
                        var7 = var11[var7];
                        var7 = var8.bind(var5)(var7);
                        var9 = var7.intl;
                        var8 = var9.string;
                        var7 = 18;
                        var7 = var11[var7];
                        var7 = var10.bind(var5)(var7);
                        var7 = var7["+QRSxc"];
                        var7 = var8.bind(var9)(var7);
                        var2['content'] = var7;
                        var2 = var4.bind(var6)(var2);
case 31: // try_end2
                        var4 = _closure2_slot4;
                        var2 = false;
                        var2 = var4.bind(var5)(var2);
                        return var5;
case 9: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=1);
                        var4 = _closure2_slot4;
                        var3 = false;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
case 24:
                        return var1;
                    }
                };
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = new Array(1);
            var2[0] = var11;
            var29 = var10.bind(var6)(var3, var2);
            var3 = var6.useCallback;
            var2 = new Array(3);
            var2[0] = var21;
            var2[1] = var20;
            var2[2] = var19;
            var1 = function() {
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 19;
                var4 = var3[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var7 = _closure1_slot0;
                var4 = 21;
                var4 = var3[var4];
                var7 = var7.bind(var1)(var4);
                var4 = 20;
                var4 = var3[var4];
                var3 = var3.paths;
                var4 = var7.bind(var1)(var4, var3);
                var3 = _closure1_slot8;
                var2 = {};
                var8 = _closure2_slot2;
                var2['linkCode'] = var8;
                var8 = _closure2_slot3;
                var2['expiresAt'] = var8;
                var7 = _closure2_slot1;
                var2['onRefresh'] = var7;
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var12 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot9;
            var10 = _closure1_slot1;
            var1 = 22;
            var1 = var5[var1];
            var2 = var10.bind(var4)(var1);
            var1 = {};
            var24 = 17;
            var6 = var5[var24];
            var6 = var7.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var23 = 18;
            var5 = var5[var23];
            var5 = var10.bind(var4)(var5);
            var5 = var5.dMMSA0;
            var5 = var6.bind(var7)(var5);
            var1['title'] = var5;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var6 = var5[var24];
            var6 = var7.bind(var4)(var6);
            var11 = var6.intl;
            var10 = var11.format;
            var6 = _closure1_slot1;
            var5 = var5[var23];
            var6 = var6.bind(var4)(var5);
            if(var8) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var7 = var6["6GaRTu"];
            var5 = {};
            var16 = 'https://support.discord.com/hc/articles/14155060633623';
            var5['link'] = var16;
            var5 = var10.bind(var11)(var7, var5);
            _fun0001_ip = 35; continue _fun0001;
case 33:
            var7 = var6.Ke+kz5;
            var6 = {};
            var6['pendingCount'] = var15;
            var15 = 'https://support.discord.com/hc/articles/14155060633623';
            var6['link'] = var15;
            var5 = var10.bind(var11)(var7, var6);
case 35:
            var1['subtitle'] = var5;
            var5 = 'text-muted';
            var1['subtitleColor'] = var5;
            var1['submitting'] = var30;
            var10 = _closure1_slot9;
            var15 = _closure1_slot0;
            var26 = _closure1_slot2;
            var5 = 23;
            var5 = var26[var5];
            var5 = var15.bind(var4)(var5);
            var7 = var5.ModalFooter;
            var6 = {};
            var17 = _closure1_slot10;
            var5 = 24;
            var11 = var26[var5];
            var11 = var15.bind(var4)(var11);
            var16 = var11.Stack;
            var11 = {};
            var22 = _closure1_slot1;
            var15 = 8;
            var18 = var26[var15];
            var18 = var22.bind(var4)(var18);
            var18 = var18.space;
            var18 = var18.PX_16;
            var11['spacing'] = var18;
            var18 = 25;
            var18 = var26[var18];
            var22 = var22.bind(var4)(var18);
            var18 = {};
            var22 = var10.bind(var4)(var22, var18);
            var18 = new Array(2);
            var18[0] = var22;
            var22 = var8;
            if(!var22) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var28 = _closure1_slot9;
            var34 = _closure1_slot0;
            var32 = _closure1_slot2;
            var26 = 26;
            var26 = var32[var26];
            var26 = var34.bind(var4)(var26);
            var27 = var26.ModalActionButton;
            var26 = {};
            var33 = 'primary';
            var26['variant'] = var33;
            var33 = var32[var24];
            var33 = var34.bind(var4)(var33);
            var34 = var33.intl;
            var33 = var34.string;
            var35 = _closure1_slot1;
            var32 = var32[var23];
            var32 = var35.bind(var4)(var32);
            var32 = var32.OaHZUf;
            var32 = var33.bind(var34)(var32);
            var26['text'] = var32;
            var31 = !var31;
            if(var31) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var31 = var30;
case 38:
            var26['disabled'] = var31;
            var26['loading'] = var30;
            var26['onPress'] = var29;
            var22 = var28.bind(var4)(var27, var26);
case 36:
            var18[1] = var22;
            var11['children'] = var18;
            var11 = var17.bind(var4)(var16, var11);
            var6['children'] = var11;
            var6 = var10.bind(var4)(var7, var6);
            var1['footer'] = var6;
            var7 = _closure1_slot9;
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = var10[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Stack;
            var5 = {};
            var11 = _closure1_slot1;
            var10 = var10[var15];
            var10 = var11.bind(var4)(var10);
            var10 = var10.space;
            var10 = var10.PX_16;
            var5['spacing'] = var10;
            var10 = var25.body;
            var5['style'] = var10;
            if(var8) { _fun0001_ip = 40; continue _fun0001 }
case 41:
            var11 = _closure1_slot10;
            var10 = _closure1_slot6;
            var8 = {};
            var15 = var25.cardSection;
            var8['style'] = var15;
            var18 = _closure1_slot9;
            var17 = _closure1_slot0;
            var22 = _closure1_slot2;
            var15 = 28;
            var15 = var22[var15];
            var15 = var17.bind(var4)(var15);
            var16 = var15.Text;
            var15 = {'style': null, 'variant': 'text-md/semibold', 'color': 'mobile-text-heading-primary'};
            var25 = var25.cardTitle;
            var15['style'] = var25;
            var24 = var22[var24];
            var24 = var17.bind(var4)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var26 = _closure1_slot1;
            var23 = var22[var23];
            var23 = var26.bind(var4)(var23);
            var23 = var23["6JV39E"];
            var23 = var24.bind(var25)(var23);
            var15['children'] = var23;
            var16 = var18.bind(var4)(var16, var15);
            var15 = new Array(2);
            var15[0] = var16;
            var16 = 29;
            var16 = var22[var16];
            var16 = var17.bind(var4)(var16);
            var17 = var16.ConnectGuardianCard;
            var16 = {};
            var16['linkCode'] = var21;
            var16['expiresAt'] = var20;
            var16['onRefresh'] = var19;
            var16 = var18.bind(var4)(var17, var16);
            var15[1] = var16;
            var8['children'] = var15;
            var8 = var11.bind(var4)(var10, var8);
            _fun0001_ip = 42; continue _fun0001;
case 40:
            var11 = _closure1_slot9;
            var10 = _closure1_slot1;
            var15 = _closure1_slot2;
            var9 = 27;
            var9 = var15[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var9['pendingRequests'] = var14;
            var9['linkedUsersProcessed'] = var13;
            var9['onInviteAnotherGuardian'] = var12;
            var8 = var11.bind(var4)(var10, var9);
case 42:
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();