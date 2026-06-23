// app/modules/safety_flows/native/tasks/ParentalConsentConnectionScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function PendingRequestListStub() {
        var1 = null;
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = function AgeUpdateFooterStub() {
        var1 = null;
        return var1;
    };
    var _closure1_slot12 = var1;
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
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var11 = 7;
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
    var _closure1_slot10 = var4;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/safety_flows/native/tasks/ParentalConsentConnectionScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ParentalConsentConnectionScreen() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot10;
            var4 = undefined;
            var22 = var2.bind(var4)();
            var11 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 8;
            var2 = var8[var2];
            var3 = var11.bind(var4)(var2);
            var2 = var3.useOnTaskComplete;
            var6 = var2.bind(var3)();
            var _closure2_slot0 = var6;
            var2 = 9;
            var2 = var8[var2];
            var3 = var11.bind(var4)(var2);
            var2 = var3.useSafetyFlowTask;
            var2 = var2.bind(var3)();
            var2 = var2.task;
            var3 = 10;
            var3 = var8[var3];
            var5 = var11.bind(var4)(var3);
            var3 = var5.useFamilyCenterActions;
            var3 = var3.bind(var5)();
            var16 = var3.getLinkCode;
            var2 = var2.ui_component;
            var10 = var2.component;
            var5 = null;
            if(!(var5 == var10)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = {};
case 2:
            var2 = {};
            var7 = var10.link_code;
            var3 = '';
            var12 = 'string';
            var13 = typeof var7;
            var7 = var3;
            if(!(var12 === var13)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var10.link_code;
case 4:
            var2['link_code'] = var7;
            var7 = var10.link_code_expires_at;
            var7 = typeof var7;
            if(!(var12 === var7)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var10.link_code_expires_at;
case 6:
            var2['link_code_expires_at'] = var3;
            var3 = global;
            var13 = var3.Array;
            var12 = var13.isArray;
            var7 = var10.pending_requests;
            var7 = var12.bind(var13)(var7);
            if(var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var7 = new Array(0);
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var7 = var10.pending_requests;
case 10:
            var2['pending_requests'] = var7;
            var10 = _closure1_slot1;
            var7 = 11;
            var7 = var8[var7];
            var10 = var10.bind(var4)(var7);
            var7 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.fetchLinkedUsers;
                var2 = var2.bind(var3)();
                return var1;
            };
            var7 = var10.bind(var4)(var7);
            var7 = 13;
            var10 = var8[var7];
            var12 = var11.bind(var4)(var10);
            var10 = var12.usePendingRequestCount;
            var10 = var10.bind(var12)();
            var7 = var8[var7];
            var12 = var11.bind(var4)(var7);
            var7 = var12.useHasActiveParentLinks;
            var23 = var7.bind(var12)();
            var14 = 14;
            var7 = var8[var14];
            var17 = var11.bind(var4)(var7);
            var15 = var17.useStateFromStores;
            var7 = _closure1_slot7;
            var13 = new Array(1);
            var13[0] = var7;
            var12 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getLinkedUsers;
                var1 = var1.bind(var2)();
                return var1;
            };
            var13 = var15.bind(var17)(var13, var12);
            var8 = var8[var14];
            var12 = var11.bind(var4)(var8);
            var11 = var12.useStateFromStores;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getAreLinkedUsersProcessed;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var11.bind(var12)(var8, var7);
            if(var7) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var8 = var2.pending_requests;
            var11 = var8.length;
            var8 = 0;
            var8 = var11 > var8;
            _fun0001_ip = 13; continue _fun0001;
case 11:
            var12 = var3.Object;
            var11 = var12.values;
            var13 = var11.bind(var12)(var13);
            var12 = var13.some;
            var11 = function(arg1) {
                var2 = null;
                var1 = arg1;
                var1 = var2 != var1;
                return var1;
            };
            var8 = var12.bind(var13)(var11);
case 13:
            var12 = var10;
            if(var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var2.pending_requests;
            var12 = var7.length;
case 14:
            var13 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = var11[var14];
            var18 = var13.bind(var4)(var7);
            var17 = var18.useStateFromStores;
            var7 = _closure1_slot7;
            var15 = new Array(1);
            var15[0] = var7;
            var10 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getLinkCode;
                var1 = var1.bind(var2)();
                return var1;
            };
            var18 = var17.bind(var18)(var15, var10);
            var11 = var11[var14];
            var14 = var13.bind(var4)(var11);
            var13 = var14.useStateFromStores;
            var11 = new Array(1);
            var11[0] = var7;
            var7 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getLinkCodeExpiresAt;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = var13.bind(var14)(var11, var7);
            if(!(var5 == var18)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var18 = var2.link_code;
case 16:
            var17 = var7;
            if(!(var5 == var17)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var5 = var3.Date;
            var3 = var5.parse;
            var2 = var2.link_code_expires_at;
            var17 = var3.bind(var5)(var2);
case 18:
            var5 = _closure1_slot5;
            var3 = var5.useState;
            var2 = false;
            var7 = var3.bind(var5)(var2);
            var3 = _closure1_slot4;
            var2 = 2;
            var3 = var3.bind(var4)(var7, var2);
            var2 = 0;
            var19 = var3[var2];
            var2 = 1;
            var2 = var3[var2];
            var _closure2_slot1 = var2;
            var3 = var5.useCallback;
            var2 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                        var4 = _closure2_slot1;
                        var5 = undefined;
                        var2 = true;
                        var2 = var4.bind(var5)(var2);
case 22: // try_start_0 // try_start_1
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
case 23:
                        return var2;
case 24:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0002_ip = 25; continue _fun0002 }
case 26: // try_end0
                        _fun0002_ip = 27; continue _fun0002;
case 25: // try_end1
                        var6 = _closure2_slot1;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
                        return var2;
case 28: // try_start_2 // catch_target0
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
case 27: // try_end2
                        var4 = _closure2_slot1;
                        var2 = false;
                        var2 = var4.bind(var5)(var2);
                        return var5;
case 29: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=1);
                        var4 = _closure2_slot1;
                        var3 = false;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
case 20:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var2.bind(var4)(var1);
            var1 = new Array(1);
            var1[0] = var6;
            var15 = var3.bind(var5)(var2, var1);
            var3 = _closure1_slot8;
            var10 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 19;
            var1 = var5[var1];
            var2 = var10.bind(var4)(var1);
            var1 = {};
            var7 = _closure1_slot0;
            var21 = 17;
            var6 = var5[var21];
            var6 = var7.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var20 = 18;
            var5 = var5[var20];
            var5 = var10.bind(var4)(var5);
            var5 = var5.dMMSA0;
            var5 = var6.bind(var7)(var5);
            var1['title'] = var5;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var6 = var5[var21];
            var6 = var7.bind(var4)(var6);
            var11 = var6.intl;
            var10 = var11.format;
            var6 = _closure1_slot1;
            var5 = var5[var20];
            var6 = var6.bind(var4)(var5);
            if(var8) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var7 = var6["6GaRTu"];
            var5 = {};
            var13 = 'https://support.discord.com/hc/articles/14155060633623';
            var5['link'] = var13;
            var5 = var10.bind(var11)(var7, var5);
            _fun0001_ip = 32; continue _fun0001;
case 30:
            var7 = var6.Ke+kz5;
            var6 = {};
            var6['pendingCount'] = var12;
            var12 = 'https://support.discord.com/hc/articles/14155060633623';
            var6['link'] = var12;
            var5 = var10.bind(var11)(var7, var6);
case 32:
            var1['subtitle'] = var5;
            var5 = 'text-muted';
            var1['subtitleColor'] = var5;
            var1['submitting'] = var19;
            var7 = _closure1_slot9;
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 20;
            var5 = var10[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.ModalFooter;
            var5 = {};
            var12 = _closure1_slot8;
            var11 = _closure1_slot12;
            var10 = {};
            var11 = var12.bind(var4)(var11, var10);
            var10 = new Array(2);
            var10[0] = var11;
            var11 = var8;
            if(!var11) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var14 = _closure1_slot8;
            var26 = _closure1_slot0;
            var24 = _closure1_slot2;
            var12 = 21;
            var12 = var24[var12];
            var12 = var26.bind(var4)(var12);
            var13 = var12.ModalActionButton;
            var12 = {};
            var25 = 'primary';
            var12['variant'] = var25;
            var25 = var24[var21];
            var25 = var26.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var27 = _closure1_slot1;
            var24 = var24[var20];
            var24 = var27.bind(var4)(var24);
            var24 = var24.OaHZUf;
            var24 = var25.bind(var26)(var24);
            var12['text'] = var24;
            var23 = !var23;
            if(var23) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var23 = var19;
case 35:
            var12['disabled'] = var23;
            var12['loading'] = var19;
            var12['onPress'] = var15;
            var11 = var14.bind(var4)(var13, var12);
case 33:
            var10[1] = var11;
            var5['children'] = var10;
            var5 = var7.bind(var4)(var6, var5);
            var1['footer'] = var5;
            var7 = _closure1_slot8;
            var6 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 22;
            var5 = var12[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Stack;
            var5 = {};
            var11 = _closure1_slot1;
            var10 = 7;
            var10 = var12[var10];
            var10 = var11.bind(var4)(var10);
            var10 = var10.space;
            var10 = var10.PX_16;
            var5['spacing'] = var10;
            var10 = var22.body;
            var5['style'] = var10;
            if(var8) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var11 = _closure1_slot9;
            var10 = _closure1_slot6;
            var8 = {};
            var12 = var22.cardSection;
            var8['style'] = var12;
            var15 = _closure1_slot8;
            var14 = _closure1_slot0;
            var19 = _closure1_slot2;
            var12 = 23;
            var12 = var19[var12];
            var12 = var14.bind(var4)(var12);
            var13 = var12.Text;
            var12 = {'style': null, 'variant': 'text-md/semibold', 'color': 'mobile-text-heading-primary'};
            var22 = var22.cardTitle;
            var12['style'] = var22;
            var21 = var19[var21];
            var21 = var14.bind(var4)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var23 = _closure1_slot1;
            var20 = var19[var20];
            var20 = var23.bind(var4)(var20);
            var20 = var20["6JV39E"];
            var20 = var21.bind(var22)(var20);
            var12['children'] = var20;
            var13 = var15.bind(var4)(var13, var12);
            var12 = new Array(2);
            var12[0] = var13;
            var13 = 24;
            var13 = var19[var13];
            var13 = var14.bind(var4)(var13);
            var14 = var13.ConnectGuardianCard;
            var13 = {};
            var13['linkCode'] = var18;
            var13['expiresAt'] = var17;
            var13['onRefresh'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var12[1] = var13;
            var8['children'] = var12;
            var8 = var11.bind(var4)(var10, var8);
            _fun0001_ip = 39; continue _fun0001;
case 37:
            var11 = _closure1_slot8;
            var10 = _closure1_slot11;
            var9 = {};
            var8 = var11.bind(var4)(var10, var9);
case 39:
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