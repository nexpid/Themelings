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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CONNECT_GUARDIAN_BOTTOM_SHEET_KEY;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var11 = 9;
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
    var _closure1_slot12 = var4;
    var4 = 33;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/safety_flows/native/tasks/ParentalConsentConnectionScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ParentalConsentConnectionScreen() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot12;
            var4 = undefined;
            var26 = var2.bind(var4)();
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 10;
            var2 = var10[var2];
            var3 = var12.bind(var4)(var2);
            var2 = var3.useOnTaskComplete;
            var11 = var2.bind(var3)();
            var _closure2_slot0 = var11;
            var2 = 11;
            var2 = var10[var2];
            var3 = var12.bind(var4)(var2);
            var2 = var3.useSafetyFlowTask;
            var2 = var2.bind(var3)();
            var2 = var2.task;
            var3 = 12;
            var3 = var10[var3];
            var5 = var12.bind(var4)(var3);
            var3 = var5.useFamilyCenterActions;
            var3 = var3.bind(var5)();
            var14 = var3.getLinkCode;
            var _closure2_slot1 = var14;
            var5 = _closure1_slot1;
            var3 = 13;
            var3 = var10[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.bind(var4)(var14);
            var2 = var2.ui_component;
            var6 = var2.component;
            var7 = null;
            if(!(var7 == var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = {};
case 2:
            var2 = {};
            var5 = var6.link_code;
            var3 = '';
            var8 = 'string';
            var13 = typeof var5;
            var5 = var3;
            if(!(var8 === var13)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var6.link_code;
case 4:
            var2['link_code'] = var5;
            var5 = var6.link_code_expires_at;
            var5 = typeof var5;
            if(!(var8 === var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var6.link_code_expires_at;
case 6:
            var2['link_code_expires_at'] = var3;
            var5 = global;
            var13 = var5.Array;
            var8 = var13.isArray;
            var3 = var6.pending_requests;
            var3 = var8.bind(var13)(var3);
            if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = new Array(0);
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var3 = var6.pending_requests;
case 10:
            var2['pending_requests'] = var3;
            var6 = 14;
            var3 = var10[var6];
            var8 = var12.bind(var4)(var3);
            var3 = var8.usePendingRequestCount;
            var3 = var3.bind(var8)();
            var6 = var10[var6];
            var8 = var12.bind(var4)(var6);
            var6 = var8.useHasActiveParentLinks;
            var32 = var6.bind(var8)();
            var6 = 15;
            var8 = var10[var6];
            var17 = var12.bind(var4)(var8);
            var16 = var17.useStateFromStores;
            var8 = _closure1_slot7;
            var15 = new Array(1);
            var15[0] = var8;
            var13 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getLinkedUsers;
                var1 = var1.bind(var2)();
                return var1;
            };
            var13 = var16.bind(var17)(var15, var13);
            var10 = var10[var6];
            var15 = var12.bind(var4)(var10);
            var12 = var15.useStateFromStores;
            var10 = new Array(1);
            var10[0] = var8;
            var8 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getAreLinkedUsersProcessed;
                var1 = var1.bind(var2)();
                return var1;
            };
            var16 = var12.bind(var15)(var10, var8);
            if(var16) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var8 = var2.pending_requests;
            var10 = var8.length;
            var8 = 0;
            var12 = var10 > var8;
            _fun0001_ip = 13; continue _fun0001;
case 11:
            var10 = var5.Object;
            var8 = var10.values;
            var13 = var8.bind(var10)(var13);
            var10 = var13.some;
            var8 = function(arg1) {
                var2 = null;
                var1 = arg1;
                var1 = var2 != var1;
                return var1;
            };
            var12 = var10.bind(var13)(var8);
case 13:
            var18 = var3;
            if(var16) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var3 = var2.pending_requests;
            var18 = var3.length;
case 14:
            var8 = _closure1_slot5;
            var3 = var8.useState;
            var8 = var3.bind(var8)(var12);
            var3 = _closure1_slot4;
            var19 = 2;
            var13 = var3.bind(var4)(var8, var19);
            var10 = 0;
            var8 = var13[var10];
            var3 = 1;
            var13 = var13[var3];
            if(!var12) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var12 = !var8;
case 16:
            if(!var12) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var12 = true;
            var12 = var13.bind(var4)(var12);
case 18:
            var17 = _closure1_slot0;
            var15 = _closure1_slot2;
            var12 = var15[var6];
            var22 = var17.bind(var4)(var12);
            var21 = var22.useStateFromStores;
            var12 = _closure1_slot7;
            var20 = new Array(1);
            var20[0] = var12;
            var13 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getLinkCode;
                var1 = var1.bind(var2)();
                return var1;
            };
            var22 = var21.bind(var22)(var20, var13);
            var15 = var15[var6];
            var20 = var17.bind(var4)(var15);
            var17 = var20.useStateFromStores;
            var15 = new Array(1);
            var15[0] = var12;
            var12 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getLinkCodeExpiresAt;
                var1 = var1.bind(var2)();
                return var1;
            };
            var12 = var17.bind(var20)(var15, var12);
            if(!(var7 == var22)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var22 = var2.link_code;
case 20:
            var _closure2_slot2 = var22;
            var15 = var12;
            if(!(var7 == var15)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var12 = var5.Date;
            var7 = var12.parse;
            var5 = var2.link_code_expires_at;
            var15 = var7.bind(var12)(var5);
case 22:
            var _closure2_slot3 = var15;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var6 = var5[var6];
            var17 = var7.bind(var4)(var6);
            var13 = var17.useStateFromStores;
            var6 = _closure1_slot8;
            var12 = new Array(1);
            var12[0] = var6;
            var6 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var12 = var13.bind(var17)(var12, var6);
            var _closure2_slot4 = var12;
            var6 = _closure1_slot5;
            var17 = var6.useCallback;
            var13 = new Array(2);
            var13[0] = var12;
            var13[1] = var22;
            var12 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot4;
                    var2 = null;
                    var2 = var2 != var3;
                    if(!var2) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                    var4 = _closure2_slot2;
                    var3 = '';
                    var2 = var3 !== var4;
case 24:
                    if(!var2) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 16;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.shareGuardianConnectLink;
                    var2 = _closure2_slot4;
                    var1 = _closure2_slot2;
                    var1 = var3.bind(var4)(var2, var1);
case 26:
                    var1 = undefined;
                    return var1;
                }
            };
            var13 = var17.bind(var6)(var12, var13);
            var12 = 17;
            var12 = var5[var12];
            var17 = var7.bind(var4)(var12);
            var12 = var17.useDerivedPendingRequests;
            var2 = var2.pending_requests;
            var17 = var12.bind(var17)(var2, var16);
            var12 = var6.useState;
            var2 = false;
            var12 = var12.bind(var6)(var2);
            var2 = _closure1_slot4;
            var2 = var2.bind(var4)(var12, var19);
            var31 = var2[var10];
            var2 = var2[var3];
            var _closure2_slot5 = var2;
            var10 = var6.useCallback;
            var3 = _closure1_slot3;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                        var4 = _closure2_slot5;
                        var5 = undefined;
                        var2 = true;
                        var2 = var4.bind(var5)(var2);
case 30: // try_start_0 // try_start_1
                        var4 = _closure2_slot0;
                        var2 = {};
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var6 = 18;
                        var6 = var8[var6];
                        var6 = var7.bind(var5)(var6);
                        var6 = var6.TaskInputType;
                        var6 = var6.Empty;
                        var2['type'] = var6;
                        var2 = var4.bind(var5)(var2);
                        SaveGenerator(address=80);
case 31:
                        return var2;
case 32:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0003_ip = 33; continue _fun0003 }
case 34: // try_end0
                        _fun0003_ip = 35; continue _fun0003;
case 33: // try_end1
                        var6 = _closure2_slot5;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
                        return var2;
case 36: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=1);
                        var10 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var2 = 19;
                        var2 = var11[var2];
                        var6 = var10.bind(var5)(var2);
                        var4 = var6.open;
                        var2 = {};
                        var8 = 'SAFETY_FLOWS_PARENTAL_CONSENT_CONNECTION_ERROR';
                        var2['key'] = var8;
                        var8 = _closure1_slot0;
                        var7 = 20;
                        var7 = var11[var7];
                        var7 = var8.bind(var5)(var7);
                        var9 = var7.intl;
                        var8 = var9.string;
                        var7 = 21;
                        var7 = var11[var7];
                        var7 = var10.bind(var5)(var7);
                        var7 = var7["+QRSxc"];
                        var7 = var8.bind(var9)(var7);
                        var2['content'] = var7;
                        var2 = var4.bind(var6)(var2);
case 35: // try_end2
                        var4 = _closure2_slot5;
                        var2 = false;
                        var2 = var4.bind(var5)(var2);
                        return var5;
case 37: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=1);
                        var4 = _closure2_slot5;
                        var3 = false;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
case 28:
                        return var1;
                    }
                };
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = new Array(1);
            var2[0] = var11;
            var30 = var10.bind(var6)(var3, var2);
            var3 = var6.useCallback;
            var2 = new Array(3);
            var2[0] = var22;
            var2[1] = var15;
            var2[2] = var14;
            var1 = function() {
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 22;
                var4 = var3[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var4);
                var5 = var6.openLazy;
                var7 = _closure1_slot0;
                var4 = 24;
                var4 = var3[var4];
                var7 = var7.bind(var1)(var4);
                var4 = 23;
                var4 = var3[var4];
                var3 = var3.paths;
                var4 = var7.bind(var1)(var4, var3);
                var3 = _closure1_slot9;
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
            var3 = _closure1_slot10;
            var10 = _closure1_slot1;
            var1 = 25;
            var1 = var5[var1];
            var2 = var10.bind(var4)(var1);
            var1 = {};
            var25 = 20;
            var6 = var5[var25];
            var6 = var7.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var24 = 21;
            var5 = var5[var24];
            var5 = var10.bind(var4)(var5);
            var5 = var5.dMMSA0;
            var5 = var6.bind(var7)(var5);
            var1['title'] = var5;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var6 = var5[var25];
            var6 = var7.bind(var4)(var6);
            var11 = var6.intl;
            var10 = var11.format;
            var6 = _closure1_slot1;
            var5 = var5[var24];
            var6 = var6.bind(var4)(var5);
            if(var8) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var7 = var6["6GaRTu"];
            var5 = {};
            var19 = 'https://support.discord.com/hc/articles/14155060633623';
            var5['link'] = var19;
            var5 = var10.bind(var11)(var7, var5);
            _fun0001_ip = 40; continue _fun0001;
case 38:
            var7 = var6.Ke+kz5;
            var6 = {};
            var6['pendingCount'] = var18;
            var18 = 'https://support.discord.com/hc/articles/14155060633623';
            var6['link'] = var18;
            var5 = var10.bind(var11)(var7, var6);
case 40:
            var1['subtitle'] = var5;
            var5 = 'text-muted';
            var1['subtitleColor'] = var5;
            var1['submitting'] = var31;
            var10 = _closure1_slot10;
            var18 = _closure1_slot0;
            var27 = _closure1_slot2;
            var5 = 26;
            var5 = var27[var5];
            var5 = var18.bind(var4)(var5);
            var7 = var5.ModalFooter;
            var6 = {};
            var20 = _closure1_slot11;
            var5 = 27;
            var11 = var27[var5];
            var11 = var18.bind(var4)(var11);
            var19 = var11.Stack;
            var11 = {};
            var23 = _closure1_slot1;
            var18 = 9;
            var21 = var27[var18];
            var21 = var23.bind(var4)(var21);
            var21 = var21.space;
            var21 = var21.PX_16;
            var11['spacing'] = var21;
            var21 = 28;
            var21 = var27[var21];
            var23 = var23.bind(var4)(var21);
            var21 = {};
            var23 = var10.bind(var4)(var23, var21);
            var21 = new Array(2);
            var21[0] = var23;
            var23 = var8;
            if(!var23) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var29 = _closure1_slot10;
            var35 = _closure1_slot0;
            var33 = _closure1_slot2;
            var27 = 29;
            var27 = var33[var27];
            var27 = var35.bind(var4)(var27);
            var28 = var27.ModalActionButton;
            var27 = {};
            var34 = 'primary';
            var27['variant'] = var34;
            var34 = var33[var25];
            var34 = var35.bind(var4)(var34);
            var35 = var34.intl;
            var34 = var35.string;
            var36 = _closure1_slot1;
            var33 = var33[var24];
            var33 = var36.bind(var4)(var33);
            var33 = var33.OaHZUf;
            var33 = var34.bind(var35)(var33);
            var27['text'] = var33;
            var32 = !var32;
            if(var32) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var32 = var31;
case 43:
            var27['disabled'] = var32;
            var27['loading'] = var31;
            var27['onPress'] = var30;
            var23 = var29.bind(var4)(var28, var27);
case 41:
            var21[1] = var23;
            var11['children'] = var21;
            var11 = var20.bind(var4)(var19, var11);
            var6['children'] = var11;
            var6 = var10.bind(var4)(var7, var6);
            var1['footer'] = var6;
            var7 = _closure1_slot10;
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = var10[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Stack;
            var5 = {};
            var11 = _closure1_slot1;
            var10 = var10[var18];
            var10 = var11.bind(var4)(var10);
            var10 = var10.space;
            var10 = var10.PX_16;
            var5['spacing'] = var10;
            var10 = var26.body;
            var5['style'] = var10;
            if(var8) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var11 = _closure1_slot11;
            var10 = _closure1_slot6;
            var8 = {};
            var18 = var26.cardSection;
            var8['style'] = var18;
            var21 = _closure1_slot10;
            var20 = _closure1_slot0;
            var23 = _closure1_slot2;
            var18 = 31;
            var18 = var23[var18];
            var18 = var20.bind(var4)(var18);
            var19 = var18.Text;
            var18 = {'style': null, 'variant': 'text-md/semibold', 'color': 'mobile-text-heading-primary'};
            var26 = var26.cardTitle;
            var18['style'] = var26;
            var25 = var23[var25];
            var25 = var20.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var27 = _closure1_slot1;
            var24 = var23[var24];
            var24 = var27.bind(var4)(var24);
            var24 = var24["6JV39E"];
            var24 = var25.bind(var26)(var24);
            var18['children'] = var24;
            var19 = var21.bind(var4)(var19, var18);
            var18 = new Array(2);
            var18[0] = var19;
            var19 = 32;
            var19 = var23[var19];
            var19 = var20.bind(var4)(var19);
            var20 = var19.ConnectGuardianCard;
            var19 = {};
            var23 = 'full';
            var19['shareActions'] = var23;
            var19['linkCode'] = var22;
            var19['expiresAt'] = var15;
            var19['onRefresh'] = var14;
            var19 = var21.bind(var4)(var20, var19);
            var18[1] = var19;
            var8['children'] = var18;
            var8 = var11.bind(var4)(var10, var8);
            _fun0001_ip = 47; continue _fun0001;
case 45:
            var11 = _closure1_slot10;
            var10 = _closure1_slot1;
            var18 = _closure1_slot2;
            var9 = 30;
            var9 = var18[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var9['pendingRequests'] = var17;
            var9['linkedUsersProcessed'] = var16;
            var9['expiresAt'] = var15;
            var9['onRefreshLinkCode'] = var14;
            var9['onShare'] = var13;
            var9['onInviteAnotherGuardian'] = var12;
            var8 = var11.bind(var4)(var10, var9);
case 47:
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