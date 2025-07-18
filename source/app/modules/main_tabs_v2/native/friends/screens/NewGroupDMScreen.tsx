// app/modules/main_tabs_v2/native/friends/screens/NewGroupDMScreen.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var12 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function handleOneRecipientInDM() {
        var1 = undefined;
        var4 = _closure1_slot21;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = function _handleOneRecipientInDM() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 137; continue _fun0001 }
 10:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var5 = 13;
                    var2 = var2[var5];
                    var6 = undefined;
                    var7 = var4.bind(var6)(var2);
                    var4 = var7.openPrivateChannel;
                    var2 = {};
                    var8 = new Array(0);
                    var2['recipientIds'] = var8;
                    var8 = 'New Group DM';
                    var2['location'] = var8;
                    var8 = arg2;
                    var2['onBeforeTransition'] = var8;
                    var2 = var4.bind(var7)(var2);
                    SaveGenerator(address=79);
 77:
                    return var2;
 79:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 134; continue _fun0001 }
 85:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var5 = var4.bind(var6)(var3);
                    var4 = var5.addRecipients;
                    var3 = arg1;
                    var3 = var4.bind(var5)(var2, var3, var6);
                    SaveGenerator(address=122);
 120:
                    return var3;
 122:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 131; continue _fun0001 }
 128:
                    return var3;
 131:
                    return var3;
 134:
                    return var2;
 137:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot21 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = function _handleInviteUsers() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    var5 = arg1;
                    var7 = arguments[1];
                    var6 = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 596; continue _fun0002 }
 21:
                    var _closure4_slot0 = var5;
                    var8 = undefined;
                    if(!(var7 === var8)) { _fun0002_ip = 68; continue _fun0002 }
 31:
                    var2 = global;
                    var10 = var2.Array;
                    var9 = var10.from;
                    var11 = _closure1_slot9;
                    var2 = var11.getSelectedUsers;
                    var2 = var2.bind(var11)();
                    var7 = var9.bind(var10)(var2);
 68:
                    var _closure4_slot1 = var7;
                    var _closure4_slot2 = var6;
                    var _closure4_slot3 = var8;
                    SaveGenerator(address=84);
 82:
                    return var8;
 84:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 593; continue _fun0002 }
 93:
                    var9 = null;
                    if(!(var9 != var5)) { _fun0002_ip = 128; continue _fun0002 }
 99:
                    var11 = _closure1_slot10;
                    var10 = var11.getChannelId;
                    var11 = var10.bind(var11)();
                    var10 = var5.id;
                    if(!(var11 === var10)) { _fun0002_ip = 428; continue _fun0002 }
 128:
                    if(!(var9 != var5)) { _fun0002_ip = 158; continue _fun0002 }
 132:
                    var11 = _closure1_slot10;
                    var10 = var11.getChannelId;
                    var11 = var10.bind(var11)();
                    var10 = var5.id;
                    if(!(var11 !== var10)) { _fun0002_ip = 236; continue _fun0002 }
 158:
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var10 = 13;
                    var10 = var12[var10];
                    var12 = var11.bind(var8)(var10);
                    var11 = var12.openPrivateChannel;
                    var10 = {};
                    var10['recipientIds'] = var7;
                    var13 = 'New Group DM';
                    var10['location'] = var13;
                    var10['onBeforeTransition'] = var6;
                    var10 = var11.bind(var12)(var10);
                    SaveGenerator(address=218);
 216:
                    return var10;
 218:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=10);
                    if(var11) { _fun0002_ip = 233; continue _fun0002 }
 224:
                    _closure4_slot3 = var10;
                    _fun0002_ip = 545; continue _fun0002;
 233:
                    return var10;
 236:
                    var10 = var5.isDM;
                    var10 = var10.bind(var5)();
                    if(var10) { _fun0002_ip = 379; continue _fun0002 }
 252:
                    var10 = var5.isGroupDM;
                    var10 = var10.bind(var5)();
                    if(!var10) { _fun0002_ip = 545; continue _fun0002 }
 268:
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var10 = 13;
                    var10 = var12[var10];
                    var12 = var11.bind(var8)(var10);
                    var11 = var12.addRecipients;
                    var18 = var5.id;
                    var19 = var12;
                    var17 = var7;
                    var16 = undefined;
                    var15 = var6;
                    var10 = var19[var11](var18, var17, var16, var15, var14);
                    SaveGenerator(address=318);
 316:
                    return var10;
 318:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=10);
                    if(var11) { _fun0002_ip = 376; continue _fun0002 }
 324:
                    _closure4_slot3 = var10;
                    var12 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var11 = 15;
                    var11 = var13[var11];
                    var14 = var12.bind(var8)(var11);
                    var13 = var14.ring;
                    var12 = _closure4_slot3;
                    var11 = 'gdm_invite';
                    var11 = var13.bind(var14)(var12, var7, var11);
                    _fun0002_ip = 545; continue _fun0002;
 376:
                    return var10;
 379:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var10 = 14;
                    var10 = var12[var10];
                    var11 = var11.bind(var8)(var10);
                    var10 = var11.showGuardCallAlert;
                    var12 = _closure1_slot4;
                    var9 = function* () {
                        var1 = function* anon_0_() {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0003_ip = 260; continue _fun0003 }
 10:
                                var2 = _closure4_slot1;
                                var3 = var2.length;
                                var2 = 1;
                                if(!(var2 !== var3)) { _fun0003_ip = 105; continue _fun0003 }
 29:
                                var3 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var2 = 13;
                                var2 = var4[var2];
                                var8 = undefined;
                                var7 = var3.bind(var8)(var2);
                                var6 = var7.addRecipients;
                                var2 = _closure4_slot0;
                                var16 = var2.id;
                                var15 = _closure4_slot1;
                                var13 = _closure4_slot2;
                                var17 = var7;
                                var14 = undefined;
                                var2 = var17[var6](var16, var15, var14, var13, var12);
                                SaveGenerator(address=90);
 88:
                                return var2;
 90:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                var4 = var3;
                                var3 = var2;
                                if(!var4) { _fun0003_ip = 141; continue _fun0003 }
 102:
                                return var2;
 105:
                                var7 = _closure1_slot20;
                                var6 = _closure4_slot1;
                                var4 = _closure4_slot2;
                                var2 = undefined;
                                var2 = var7.bind(var2)(var6, var4);
                                SaveGenerator(address=132);
 130:
                                return var2;
 132:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                var3 = var2;
                                if(var4) { _fun0003_ip = 257; continue _fun0003 }
 141:
                                _closure4_slot3 = var3;
                                var7 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var3 = 14;
                                var3 = var4[var3];
                                var4 = undefined;
                                var7 = var7.bind(var4)(var3);
                                var3 = var7.monkeyPatchCall;
                                var3 = var3.bind(var7)();
                                SaveGenerator(address=184);
 182:
                                return var3;
 184:
                                ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                                if(var7) { _fun0003_ip = 254; continue _fun0003 }
 190:
                                var7 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var6 = 15;
                                var6 = var8[var6];
                                var12 = var7.bind(var4)(var6);
                                var11 = var12.call;
                                var10 = _closure4_slot3;
                                var9 = false;
                                var6 = true;
                                var6 = var11.bind(var12)(var10, var9, var6);
                                var6 = 16;
                                var6 = var8[var6];
                                var6 = var7.bind(var4)(var6);
                                var5 = _closure4_slot3;
                                var5 = var6.bind(var4)(var5);
                                return var4;
 254:
                                return var3;
 257:
                                return var2;
 260:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var9 = var12.bind(var8)(var9);
                    var9 = var10.bind(var11)(var9);
                    _fun0002_ip = 545; continue _fun0002;
 428:
                    var9 = var5.isDM;
                    var9 = var9.bind(var5)();
                    if(!var9) { _fun0002_ip = 453; continue _fun0002 }
 441:
                    var10 = var7.length;
                    var9 = 1;
                    if(!(var9 !== var10)) { _fun0002_ip = 518; continue _fun0002 }
 453:
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var9 = 13;
                    var9 = var11[var9];
                    var10 = var10.bind(var8)(var9);
                    var9 = var10.addRecipients;
                    var18 = var5.id;
                    var19 = var10;
                    var17 = var7;
                    var16 = undefined;
                    var15 = var6;
                    var9 = var19[var9](var18, var17, var16, var15, var14);
                    SaveGenerator(address=503);
 501:
                    return var9;
 503:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=4);
                    var10 = var5;
                    var5 = var9;
                    if(!var10) { _fun0002_ip = 541; continue _fun0002 }
 515:
                    return var9;
 518:
                    var3 = _closure1_slot20;
                    var3 = var3.bind(var8)(var7, var6);
                    SaveGenerator(address=532);
 530:
                    return var3;
 532:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    var5 = var3;
                    if(var6) { _fun0002_ip = 590; continue _fun0002 }
 541:
                    _closure4_slot3 = var5;
 545:
                    var7 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var6 = 17;
                    var6 = var9[var6];
                    var7 = var7.bind(var8)(var6);
                    var6 = var7.hideActionSheet;
                    var5 = _closure1_slot16;
                    var5 = var6.bind(var7)(var5);
                    var4 = _closure4_slot3;
                    return var4;
 590:
                    return var3;
 593:
                    return var2;
 596:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot22 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot22 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var10 = 0;
    var4 = var6[var10];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityIndicator;
    var _closure1_slot6 = var7;
    var4 = var4.View;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserRowModes;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.InstantInviteSources;
    var _closure1_slot13 = var7;
    var7 = var4.AnalyticEvents;
    var _closure1_slot14 = var7;
    var7 = var4.AnalyticsSections;
    var _closure1_slot15 = var7;
    var4 = var4.NEW_GROUP_DM_POPOUT_ID;
    var _closure1_slot16 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot17 = var7;
    var4 = var4.jsxs;
    var _closure1_slot18 = var4;
    var4 = 11;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var11 = 'center';
    var9['textAlign'] = var11;
    var4['title'] = var9;
    var9 = {};
    var11 = 12;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.INTERACTIVE_ACTIVE;
    var9['color'] = var13;
    var4['button'] = var9;
    var9 = {'height': '100%', 'display': 'flex'};
    var4['container'] = var9;
    var9 = {'flexShrink': 1, 'marginTop': 4294967280};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BG_BASE_SECONDARY;
    var9['backgroundColor'] = var13;
    var4['instantInviteView'] = var9;
    var9 = {};
    var13 = 16;
    var9['paddingHorizontal'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BG_BASE_PRIMARY;
    var9['backgroundColor'] = var13;
    var4['nameInputContainer'] = var9;
    var9 = {'backgroundColor': null, 'marginBottom': 8, 'height': 40, 'width': '100%'};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BG_BASE_SECONDARY;
    var9['backgroundColor'] = var11;
    var4['nameInput'] = var9;
    var9 = {};
    var9['marginTop'] = var10;
    var4['noMargin'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot19 = var4;
    var4 = 31;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/friends/screens/NewGroupDMScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function NewGroupDMScreen(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var26 = var1.navigation;
            var _closure2_slot0 = var26;
            var1 = var1.route;
            var2 = var1.params;
            var1 = var2.channelId;
            var _closure2_slot1 = var1;
            var1 = var2.locationPage;
            var _closure2_slot2 = var1;
            var7 = var2.allowNameEdit;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0004_ip = 60; continue _fun0004 }
 58:
            var7 = false;
 60:
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var _closure2_slot16 = var4;
            var2 = _closure1_slot19;
            var22 = var2.bind(var4)();
            _closure2_slot3 = var22;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 18;
            var6 = var5[var2];
            var10 = var3.bind(var4)(var6);
            var9 = var10.useStateFromStores;
            var6 = _closure1_slot8;
            var8 = new Array(1);
            var8[0] = var6;
            var6 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getChannel;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var18 = var9.bind(var10)(var8, var6);
            _closure2_slot4 = var18;
            var2 = var5[var2];
            var6 = var3.bind(var4)(var2);
            var5 = var6.useStateFromStores;
            var2 = _closure1_slot11;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8 = var5.bind(var6)(var3, var2);
            _closure2_slot5 = var8;
            var11 = _closure1_slot5;
            var3 = var11.useState;
            var2 = new Array(0);
            var2 = var3.bind(var11)(var2);
            var6 = _closure1_slot3;
            var9 = 2;
            var5 = var6.bind(var4)(var2, var9);
            var3 = 0;
            var13 = var5[var3];
            _closure2_slot6 = var13;
            var2 = 1;
            var5 = var5[var2];
            _closure2_slot7 = var5;
            var5 = var11.useState;
            var12 = false;
            var5 = var5.bind(var11)(var12);
            var5 = var6.bind(var4)(var5, var9);
            var27 = var5[var3];
            _closure2_slot8 = var27;
            var5 = var5[var2];
            _closure2_slot9 = var5;
            var10 = var11.useState;
            var5 = '';
            var5 = var10.bind(var11)(var5);
            var5 = var6.bind(var4)(var5, var9);
            var21 = var5[var3];
            _closure2_slot10 = var21;
            var20 = var5[var2];
            var10 = var11.useMemo;
            var6 = new Array(1);
            var6[0] = var18;
            var5 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = _closure2_slot4;
                    var2 = null;
                    var4 = var2 == var1;
                    var1 = undefined;
                    if(var4) { _fun0005_ip = 28; continue _fun0005 }
 18:
                    var3 = _closure2_slot4;
                    var1 = var3.recipients;
 28:
                    if(!(var2 == var1)) { _fun0005_ip = 36; continue _fun0005 }
 32:
                    var1 = new Array(0);
 36:
                    return var1;
                }
            };
            var14 = var10.bind(var11)(var5, var6);
            _closure2_slot11 = var14;
            var6 = var13.length;
            var11 = var14.length;
            var10 = null;
            var15 = var10 != var11;
            var5 = 0;
            if(!var15) { _fun0004_ip = 400; continue _fun0004 }
 397:
            var5 = var11;
 400:
            var5 = var5 + var2;
            var17 = var6 + var5;
            _closure2_slot12 = var17;
            var6 = _closure1_slot1;
            var11 = _closure1_slot2;
            var23 = 19;
            var5 = var11[var23];
            var5 = var6.bind(var4)(var5);
            var5 = var5.bind(var4)(var18);
            var25 = var17 > var5;
            _closure2_slot13 = var25;
            var5 = _closure1_slot5;
            var19 = var5.useEffect;
            var15 = new Array(1);
            var15[0] = var1;
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 20;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.track;
                var2 = _closure1_slot14;
                var3 = var2.OPEN_POPOUT;
                var2 = {};
                var6 = _closure1_slot15;
                var6 = var6.DM_INVITE;
                var2['type'] = var6;
                var6 = {};
                var7 = _closure2_slot2;
                var6['page'] = var7;
                var2['location'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var1 = var19.bind(var5)(var1, var15);
            var19 = var5.useCallback;
            var15 = _closure1_slot4;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0006_ip = 320; continue _fun0006 }
 12:
                        var4 = undefined;
                        var5 = undefined;
                        var7 = _closure2_slot9;
                        var6 = true;
                        var6 = var7.bind(var4)(var6);
 30: // try_start_0
                        var8 = _closure2_slot4;
                        var13 = _closure2_slot6;
                        var7 = new Array(0);
                        var12 = 0;
                        var14 = var7;
                        var12 = arraySpread(var14, var13, var12);
                        var13 = _closure2_slot11;
                        var14 = var7;
                        var6 = arraySpread(var14, var13, var12);
                        var6 = function handleInviteUsers() {
                            var1 = undefined;
                            var4 = _closure1_slot22;
                            var3 = var4.apply;
                            var1 = arguments;
                            var2 = var1;
                            var1 = this;
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        var3 = function() {
                            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                                var3 = _closure2_slot0;
                                var2 = var3.getParent;
                                var2 = var2.bind(var3)();
                                var3 = null;
                                if(!(var3 == var2)) { _fun0007_ip = 27; continue _fun0007 }
 23:
                                var2 = _closure2_slot0;
 27:
                                var1 = var2.goBack;
                                var1 = var1.bind(var2)();
                                return var1;
                            }
                        };
                        var3 = var6.bind(var4)(var8, var7, var3);
                        SaveGenerator(address=87);
 85:
                        return var3;
 87:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                        if(var6) { _fun0006_ip = 198; continue _fun0006 }
 93:
                        var5 = var3;
 96: // try_end0
                        var8 = _closure2_slot4;
                        var9 = null;
                        var8 = var9 == var8;
                        var7 = var8;
                        if(!var8) { _fun0006_ip = 119; continue _fun0006 }
 112:
                        var8 = var5;
                        var7 = var9 != var8;
 119:
                        var6 = var7;
                        if(!var7) { _fun0006_ip = 137; continue _fun0006 }
 125:
                        var8 = _closure2_slot10;
                        var7 = '';
                        var6 = var7 !== var8;
 137:
                        if(!var6) { _fun0006_ip = 192; continue _fun0006 }
 140:
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var6 = 13;
                        var6 = var8[var6];
                        var8 = var7.bind(var4)(var6);
                        var7 = var8.setName;
                        var6 = var5;
                        var5 = _closure2_slot10;
                        var5 = var7.bind(var8)(var6, var5);
                        SaveGenerator(address=186);
 184:
                        return var5;
 186:
                        ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                        if(var6) { _fun0006_ip = 195; continue _fun0006 }
 192:
                        return var4;
 195:
                        return var5;
 198:
                        return var3;
 201: // catch_target0
                        CatchBlockStart(arg_register=2);
                        var5 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var3 = 21;
                        var3 = var11[var3];
                        var6 = var5.bind(var4)(var3);
                        var5 = var6.open;
                        var3 = {};
                        var8 = 'GROUP_DM_ADD_ERROR';
                        var3['key'] = var8;
                        var10 = _closure1_slot0;
                        var7 = 22;
                        var8 = var11[var7];
                        var8 = var10.bind(var4)(var8);
                        var9 = var8.intl;
                        var8 = var9.string;
                        var7 = var11[var7];
                        var7 = var10.bind(var4)(var7);
                        var7 = var7.t;
                        var7 = var7.N/9OFx;
                        var7 = var8.bind(var9)(var7);
                        var3['content'] = var7;
                        var3 = var5.bind(var6)(var3);
                        var3 = _closure2_slot9;
                        var2 = false;
                        var2 = var3.bind(var4)(var2);
                        var2 = undefined;
                        return var2;
 320:
                        return var1;
                    }
                };
                return var1;
            };
            var15 = var15.bind(var4)(var1);
            var1 = new Array(5);
            var1[0] = var18;
            var1[1] = var26;
            var1[2] = var14;
            var1[3] = var13;
            var1[4] = var21;
            var1 = var19.bind(var5)(var15, var1);
            _closure2_slot14 = var1;
            var19 = var5.useLayoutEffect;
            var15 = new Array(9);
            var15[0] = var18;
            var15[1] = var27;
            var15[2] = var26;
            var15[3] = var17;
            var15[4] = var25;
            var15[5] = var14;
            var15[6] = var13;
            var15[7] = var1;
            var15[8] = var22;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = _closure2_slot4;
                    var3 = null;
                    if(!(var3 != var1)) { _fun0008_ip = 32; continue _fun0008 }
 15:
                    var4 = _closure2_slot4;
                    var1 = var4.isGroupDM;
                    var1 = var1.bind(var4)();
                    if(var1) { _fun0008_ip = 94; continue _fun0008 }
 32:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 22;
                    var4 = var9[var1];
                    var7 = undefined;
                    var4 = var8.bind(var7)(var4);
                    var6 = var4.intl;
                    var4 = var6.string;
                    var1 = var9[var1];
                    var1 = var8.bind(var7)(var1);
                    var1 = var1.t;
                    var1 = var1.3hF1W1;
                    var11 = var4.bind(var6)(var1);
                    _fun0008_ip = 154; continue _fun0008;
 94:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 22;
                    var4 = var9[var1];
                    var7 = undefined;
                    var4 = var8.bind(var7)(var4);
                    var6 = var4.intl;
                    var4 = var6.string;
                    var1 = var9[var1];
                    var1 = var8.bind(var7)(var1);
                    var1 = var1.t;
                    var1 = var1.LR+Ptb;
                    var11 = var4.bind(var6)(var1);
 154:
                    var _closure3_slot0 = var11;
                    var1 = _closure2_slot4;
                    if(!(var3 != var1)) { _fun0008_ip = 180; continue _fun0008 }
 166:
                    var3 = _closure2_slot4;
                    var1 = var3.isGroupDM;
                    var1 = var1.bind(var3)();
 180:
                    var4 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 22;
                    var6 = var10[var3];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var6);
                    var7 = var6.intl;
                    var6 = var7.formatToPlainString;
                    var3 = var10[var3];
                    var3 = var4.bind(var1)(var3);
                    var3 = var3.t;
                    var4 = var3.YUhno6;
                    var3 = {};
                    var9 = _closure2_slot12;
                    var3['numMembers'] = var9;
                    var9 = _closure1_slot1;
                    var8 = 19;
                    var8 = var10[var8];
                    var9 = var9.bind(var1)(var8);
                    var8 = _closure2_slot4;
                    var8 = var9.bind(var1)(var8);
                    var3['maxMemberLimit'] = var8;
                    var10 = var6.bind(var7)(var4, var3);
                    var _closure3_slot1 = var10;
                    var4 = _closure2_slot0;
                    var3 = var4.setOptions;
                    var2 = {};
                    var6 = global;
                    var6 = var6.HermesInternal;
                    var9 = var6.concat;
                    var16 = '';
                    var14 = ' (';
                    var12 = ')';
                    var15 = var11;
                    var13 = var10;
                    var6 = var16[var9](var15, var14, var13, var12, var11);
                    var2['title'] = var6;
                    var6 = function headerTitle(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                            var2 = arg1;
                            var1 = null;
                            if(!(var2 != var1)) { _fun0009_ip = 135; continue _fun0009 }
 12:
                            var11 = {};
                            var5 = undefined;
                            var10 = var2;
                            var9 = undefined;
                            var10 = copyDataProperties(var11, var10, var9);
                            var4 = _closure1_slot17;
                            var3 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 23;
                            var1 = var7[var1];
                            var1 = var3.bind(var5)(var1);
                            var3 = var1.GenericHeaderTitle;
                            var1 = {};
                            var11 = var1;
                            var6 = copyDataProperties(var11, var10);
                            var8 = _closure3_slot0;
                            var7 = 'title';
                            var1[var7] = var8;
                            var7 = _closure3_slot1;
                            var6 = 'subtitle';
                            var1[var6] = var7;
                            var6 = _closure2_slot13;
                            var7 = 'header-primary';
                            if(!var6) { _fun0009_ip = 118; continue _fun0009 }
 112:
                            var7 = 'text-danger';
 118:
                            var6 = 'color';
                            var1[var6] = var7;
                            var1 = var4.bind(var5)(var3, var1);
                            return var1;
 135:
                            var10 = "Cannot destructure 'undefined' or 'null'.";
                            var11 = var2;
                            var1 = throwTypeError(var11, var10);
                            var1 = undefined;
                            throw var1;
                        }
                    };
                    var2['headerTitle'] = var6;
                    var5 = function headerRight(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                            var6 = arg1;
                            var1 = _closure2_slot8;
                            if(var1) { _fun0010_ip = 366; continue _fun0010 }
 18:
                            var1 = _closure2_slot4;
                            var8 = null;
                            if(!(var8 != var1)) { _fun0010_ip = 48; continue _fun0010 }
 28:
                            var4 = _closure2_slot4;
                            var1 = var4.isGroupDM;
                            var1 = var1.bind(var4)();
                            if(var1) { _fun0010_ip = 183; continue _fun0010 }
 48:
                            var12 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var4 = 23;
                            var4 = var13[var4];
                            var5 = undefined;
                            var9 = var12.bind(var5)(var4);
                            var7 = var9.getRenderHeaderTextButton;
                            var4 = 22;
                            var10 = var13[var4];
                            var10 = var12.bind(var5)(var10);
                            var11 = var10.intl;
                            var10 = var11.string;
                            var4 = var13[var4];
                            var4 = var12.bind(var5)(var4);
                            var4 = var4.t;
                            var4 = var4.CumH4u;
                            var4 = var10.bind(var11)(var4);
                            var10 = _closure1_slot4;
                            var1 = function* () {
                                var1 = function* anon_0_() {
                                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                        if(var2) { _fun0011_ip = 36; continue _fun0011 }
 7:
                                        var3 = _closure2_slot14;
                                        var2 = undefined;
                                        var2 = var3.bind(var2)();
                                        SaveGenerator(address=24);
 22:
                                        return var2;
 24:
                                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                        if(var3) { _fun0011_ip = 33; continue _fun0011 }
 30:
                                        return var2;
 33:
                                        return var2;
 36:
                                        return var1;
                                    }
                                };
                                return var1;
                            };
                            var1 = var10.bind(var5)(var1);
                            var4 = var7.bind(var9)(var4, var1);
                            var1 = {};
                            var16 = var1;
                            var15 = var6;
                            var7 = copyDataProperties(var16, var15);
                            var9 = _closure2_slot13;
                            var7 = 'disabled';
                            var1[var7] = var9;
                            var1 = var4.bind(var5)(var1);
                            _fun0010_ip = 364; continue _fun0010;
 183:
                            var13 = _closure1_slot0;
                            var14 = _closure1_slot2;
                            var4 = 23;
                            var4 = var14[var4];
                            var5 = undefined;
                            var9 = var13.bind(var5)(var4);
                            var7 = var9.getRenderHeaderTextButton;
                            var4 = 22;
                            var11 = var14[var4];
                            var11 = var13.bind(var5)(var11);
                            var12 = var11.intl;
                            var11 = var12.string;
                            var4 = var14[var4];
                            var4 = var13.bind(var5)(var4);
                            var4 = var4.t;
                            var4 = var4.OYkgVl;
                            var4 = var11.bind(var12)(var4);
                            var10 = _closure1_slot4;
                            var3 = function* () {
                                var1 = function* anon_0_() {
                                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                        if(var2) { _fun0012_ip = 36; continue _fun0012 }
 7:
                                        var3 = _closure2_slot14;
                                        var2 = undefined;
                                        var2 = var3.bind(var2)();
                                        SaveGenerator(address=24);
 22:
                                        return var2;
 24:
                                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                        if(var3) { _fun0012_ip = 33; continue _fun0012 }
 30:
                                        return var2;
 33:
                                        return var2;
 36:
                                        return var1;
                                    }
                                };
                                return var1;
                            };
                            var3 = var10.bind(var5)(var3);
                            var4 = var7.bind(var9)(var4, var3);
                            var3 = {};
                            var16 = var3;
                            var15 = var6;
                            var6 = copyDataProperties(var16, var15);
                            var7 = _closure2_slot13;
                            if(var7) { _fun0010_ip = 350; continue _fun0010 }
 302:
                            var6 = _closure2_slot4;
                            var8 = var8 == var6;
                            var6 = undefined;
                            if(var8) { _fun0010_ip = 329; continue _fun0010 }
 315:
                            var9 = _closure2_slot4;
                            var8 = var9.isGroupDM;
                            var6 = var8.bind(var9)();
 329:
                            if(!var6) { _fun0010_ip = 347; continue _fun0010 }
 332:
                            var8 = _closure2_slot6;
                            var9 = var8.length;
                            var8 = 0;
                            var6 = var9 <= var8;
 347:
                            var7 = var6;
 350:
                            var6 = 'disabled';
                            var3[var6] = var7;
                            var1 = var4.bind(var5)(var3);
 364:
                            _fun0010_ip = 414; continue _fun0010;
 366:
                            var5 = _closure1_slot17;
                            var4 = _closure1_slot6;
                            var3 = {};
                            var2 = _closure2_slot3;
                            var2 = var2.button;
                            var2 = var2.color;
                            var3['color'] = var2;
                            var2 = 'small';
                            var3['size'] = var2;
                            var2 = undefined;
                            var1 = var5.bind(var2)(var4, var3);
 414:
                            return var1;
                        }
                    };
                    var2['headerRight'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var1 = var19.bind(var5)(var1, var15);
            var19 = var5.useCallback;
            var15 = function(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var3 = _closure2_slot7;
                var1 = undefined;
                var2 = function(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                        var4 = arg1;
                        var3 = var4.indexOf;
                        var1 = _closure3_slot0;
                        var1 = var1.id;
                        var5 = var3.bind(var4)(var1);
                        var1 = new Array(0);
                        var6 = 0;
                        var8 = var1;
                        var7 = var4;
                        var3 = arraySpread(var8, var7, var6);
                        var3 = -1;
                        if(!(var3 !== var5)) { _fun0013_ip = 69; continue _fun0013 }
 52:
                        var4 = var1.splice;
                        var3 = 1;
                        var3 = var4.bind(var1)(var5, var3);
                        _fun0013_ip = 88; continue _fun0013;
 69:
                        var3 = var1.push;
                        var2 = _closure3_slot0;
                        var2 = var2.id;
                        var2 = var3.bind(var1)(var2);
 88:
                        return var1;
                    }
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = new Array(0);
            var15 = var19.bind(var5)(var15, var1);
            var1 = var5.useState;
            var5 = var1.bind(var5)(var12);
            var1 = _closure1_slot3;
            var1 = var1.bind(var4)(var5, var9);
            var3 = var1[var3];
            _closure2_slot15 = var3;
            var1 = var1[var2];
            _closure2_slot16 = var1;
            var2 = _closure1_slot0;
            var1 = 24;
            var1 = var11[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useClientThemesOverride;
            var1 = var22.noMargin;
            var9 = var2.bind(var3)(var1);
            var3 = _closure1_slot18;
            var2 = _closure1_slot7;
            var1 = {};
            var5 = var22.container;
            var1['style'] = var5;
            var19 = _closure1_slot17;
            var5 = 25;
            var5 = var11[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var11 = true;
            var5['absolute'] = var11;
            var6 = var19.bind(var4)(var6, var5);
            var5 = new Array(4);
            var5[0] = var6;
            var19 = var10 == var18;
            var6 = undefined;
            if(var19) { _fun0004_ip = 757; continue _fun0004 }
 747:
            var19 = var18.isGroupDM;
            var6 = var19.bind(var18)();
 757:
            if(!var6) { _fun0004_ip = 764; continue _fun0004 }
 760:
            var6 = var10 != var8;
 764:
            if(!var6) { _fun0004_ip = 793; continue _fun0004 }
 767:
            var19 = _closure1_slot1;
            var8 = _closure1_slot2;
            var8 = var8[var23];
            var8 = var19.bind(var4)(var8);
            var8 = var8.bind(var4)(var18);
            var6 = var17 < var8;
 793:
            if(!var6) { _fun0004_ip = 882; continue _fun0004 }
 796:
            var18 = _closure1_slot17;
            var17 = _closure1_slot7;
            var8 = {};
            var23 = var22.instantInviteView;
            var19 = new Array(2);
            var19[0] = var23;
            var19[1] = var9;
            var8['style'] = var19;
            var23 = _closure1_slot1;
            var25 = _closure1_slot2;
            var19 = 26;
            var19 = var25[var19];
            var23 = var23.bind(var4)(var19);
            var19 = {};
            var24 = function() {
                var4 = _closure1_slot4;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0014_ip = 265; continue _fun0014 }
 10:
                            var2 = _closure2_slot15;
                            if(var2) { _fun0014_ip = 260; continue _fun0014 }
 23:
                            var4 = _closure2_slot16;
                            var5 = undefined;
                            var2 = true;
                            var2 = var4.bind(var5)(var2);
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var2 = 27;
                            var2 = var7[var2];
                            var8 = var6.bind(var5)(var2);
                            var7 = var8.mobileCreateInvite;
                            var6 = _closure2_slot4;
                            var2 = _closure1_slot13;
                            var2 = var2.GROUP_DM;
                            var2 = var7.bind(var8)(var6, var2);
                            SaveGenerator(address=89);
 87:
                            return var2;
 89:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                            if(var6) { _fun0014_ip = 257; continue _fun0014 }
 98:
                            var6 = null;
                            if(!(var6 != var2)) { _fun0014_ip = 244; continue _fun0014 }
 107:
                            var6 = {};
                            var7 = _closure2_slot4;
                            var6['channel'] = var7;
                            var6['code'] = var2;
                            var8 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var7 = 22;
                            var9 = var13[var7];
                            var9 = var8.bind(var5)(var9);
                            var10 = var9.intl;
                            var9 = var10.formatToPlainString;
                            var7 = var13[var7];
                            var7 = var8.bind(var5)(var7);
                            var7 = var7.t;
                            var8 = var7.+zWvOT;
                            var7 = {};
                            var11 = _closure2_slot5;
                            var11 = var11.username;
                            var7['username'] = var11;
                            var12 = _closure1_slot1;
                            var11 = 28;
                            var11 = var13[var11];
                            var11 = var12.bind(var5)(var11);
                            var11 = var11.bind(var5)(var2);
                            var7['link'] = var11;
                            var7 = var9.bind(var10)(var8, var7);
                            var6['message'] = var7;
                            var4 = _closure1_slot13;
                            var4 = var4.GROUP_DM;
                            var6['location'] = var4;
                            var4 = arg1;
                            var4 = var4.bind(var5)(var6);
 244:
                            var4 = _closure2_slot16;
                            var3 = false;
                            var3 = var4.bind(var5)(var3);
                            _fun0014_ip = 260; continue _fun0014;
 257:
                            return var2;
 260:
                            var2 = undefined;
                            return var2;
 265:
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
            var24 = var24.bind(var4)();
            var19['onItemPressed'] = var24;
            var19 = var18.bind(var4)(var23, var19);
            var8['children'] = var19;
            var6 = var18.bind(var4)(var17, var8);
 882:
            var5[1] = var6;
            var6 = null;
            if(!var7) { _fun0004_ip = 1029; continue _fun0004 }
 894:
            var17 = _closure1_slot17;
            var8 = _closure1_slot7;
            var7 = {};
            var18 = var22.nameInputContainer;
            var7['style'] = var18;
            var19 = _closure1_slot1;
            var24 = _closure1_slot2;
            var18 = 29;
            var18 = var24[var18];
            var19 = var19.bind(var4)(var18);
            var18 = {};
            var22 = var22.nameInput;
            var18['style'] = var22;
            var18['value'] = var21;
            var18['onChangeText'] = var20;
            var23 = _closure1_slot0;
            var20 = 22;
            var21 = var24[var20];
            var21 = var23.bind(var4)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var20 = var24[var20];
            var20 = var23.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20.KSVhra;
            var20 = var21.bind(var22)(var20);
            var18['placeholder'] = var20;
            var18 = var17.bind(var4)(var19, var18);
            var7['children'] = var18;
            var6 = var17.bind(var4)(var8, var7);
 1029:
            var5[2] = var6;
            var8 = _closure1_slot17;
            var7 = _closure1_slot1;
            var17 = _closure1_slot2;
            var6 = 30;
            var6 = var17[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var16 = _closure1_slot12;
            var16 = var16.TOGGLE;
            var6['rowMode'] = var16;
            var6['onSelectUser'] = var15;
            var6['disabledUserIds'] = var14;
            var6['selectedUserIds'] = var13;
            var6['withAffinitySuggestions'] = var12;
            var6['disableGradient'] = var11;
            var9 = var10 != var9;
            var6['disableStickySections'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();