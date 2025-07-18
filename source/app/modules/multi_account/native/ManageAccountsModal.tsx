// app/modules/multi_account/native/ManageAccountsModal.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var13 = native3;
    var7 = native4;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var1 = function RemoveMultiAccountUserButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = var1.user;
            var _closure2_slot0 = var3;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var5 = 15;
            var6 = var8[var5];
            var11 = var7.bind(var4)(var6);
            var10 = var11.useStateFromStores;
            var6 = _closure1_slot9;
            var9 = new Array(1);
            var9[0] = var6;
            var6 = function() {
                var1 = _closure1_slot9;
                var1 = var1.hidePersonalInformation;
                return var1;
            };
            var6 = var10.bind(var11)(var9, var6);
            var5 = var8[var5];
            var9 = var7.bind(var4)(var5);
            var8 = var9.useStateFromStores;
            var5 = _closure1_slot10;
            var7 = new Array(1);
            var7[0] = var5;
            var5 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var8.bind(var9)(var7, var5);
            var7 = null;
            var8 = var7 == var5;
            var7 = undefined;
            if(var8) { _fun0001_ip = 128; continue _fun0001 }
 123:
            var7 = var5.id;
 128:
            var5 = var3.id;
            if(!(var7 !== var5)) { _fun0001_ip = 386; continue _fun0001 }
 140:
            var5 = var3.username;
            _closure2_slot1 = var5;
            if(var6) { _fun0001_ip = 168; continue _fun0001 }
 152:
            var8 = var3.discriminator;
            var7 = '0';
            var6 = var7 === var8;
 168:
            if(var6) { _fun0001_ip = 207; continue _fun0001 }
 171:
            var7 = var3.discriminator;
            var3 = global;
            var3 = var3.HermesInternal;
            var6 = var3.concat;
            var3 = '#';
            var3 = var6.bind(var3)(var7);
            var3 = var5 + var3;
            _closure2_slot1 = var3;
 207:
            var2 = function() {
                var4 = _closure1_slot5;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0002_ip = 358; continue _fun0002 }
 10:
                            var4 = _closure1_slot1;
                            var12 = _closure1_slot3;
                            var2 = 17;
                            var2 = var12[var2];
                            var3 = undefined;
                            var7 = var4.bind(var3)(var2);
                            var6 = var7.confirm;
                            var2 = {};
                            var11 = _closure1_slot0;
                            var8 = 18;
                            var4 = var12[var8];
                            var4 = var11.bind(var3)(var4);
                            var10 = var4.intl;
                            var9 = var10.string;
                            var4 = var12[var8];
                            var4 = var11.bind(var3)(var4);
                            var4 = var4.t;
                            var4 = var4.n0Fbg4;
                            var4 = var9.bind(var10)(var4);
                            var2['title'] = var4;
                            var4 = var12[var8];
                            var4 = var11.bind(var3)(var4);
                            var14 = var4.intl;
                            var13 = var14.formatToPlainString;
                            var4 = var12[var8];
                            var4 = var11.bind(var3)(var4);
                            var4 = var4.t;
                            var10 = var4.phEQmZ;
                            var9 = {};
                            var15 = _closure2_slot1;
                            var9['username'] = var15;
                            var9 = var13.bind(var14)(var10, var9);
                            var2['body'] = var9;
                            var9 = var12[var8];
                            var9 = var11.bind(var3)(var9);
                            var13 = var9.intl;
                            var10 = var13.string;
                            var9 = var12[var8];
                            var9 = var11.bind(var3)(var9);
                            var9 = var9.t;
                            var9 = var9.N86XcH;
                            var9 = var10.bind(var13)(var9);
                            var2['confirmText'] = var9;
                            var9 = 19;
                            var9 = var12[var9];
                            var9 = var11.bind(var3)(var9);
                            var9 = var9.ButtonColors;
                            var9 = var9.RED;
                            var2['confirmColor'] = var9;
                            var9 = var12[var8];
                            var9 = var11.bind(var3)(var9);
                            var10 = var9.intl;
                            var9 = var10.string;
                            var8 = var12[var8];
                            var8 = var11.bind(var3)(var8);
                            var8 = var8.t;
                            var8 = var8.ETE/oK;
                            var8 = var9.bind(var10)(var8);
                            var2['cancelText'] = var8;
                            var8 = true;
                            var2['isDismissable'] = var8;
                            var2 = var6.bind(var7)(var2);
                            SaveGenerator(address=303);
 301:
                            return var2;
 303:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                            if(var6) { _fun0002_ip = 355; continue _fun0002 }
 309:
                            if(!var2) { _fun0002_ip = 352; continue _fun0002 }
 312:
                            var6 = _closure1_slot2;
                            var7 = _closure1_slot3;
                            var5 = 20;
                            var5 = var7[var5];
                            var6 = var6.bind(var3)(var5);
                            var5 = var6.removeAccount;
                            var4 = _closure2_slot0;
                            var4 = var4.id;
                            var4 = var5.bind(var6)(var4);
 352:
                            return var3;
 355:
                            return var2;
 358:
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
            var6 = var2.bind(var4)();
            var5 = _closure1_slot17;
            var7 = _closure1_slot0;
            var11 = _closure1_slot3;
            var2 = 21;
            var2 = var11[var2];
            var2 = var7.bind(var4)(var2);
            var3 = var2.PressableOpacity;
            var2 = {};
            var8 = 'button';
            var2['accessibilityRole'] = var8;
            var8 = 18;
            var9 = var11[var8];
            var9 = var7.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var11[var8];
            var8 = var7.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.lSLMaW;
            var8 = var9.bind(var10)(var8);
            var2['accessibilityLabel'] = var8;
            var2['onPress'] = var6;
            var8 = _closure1_slot17;
            var6 = 22;
            var6 = var11[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.CircleMinusIcon;
            var6 = {};
            var10 = _closure1_slot1;
            var9 = 14;
            var9 = var11[var9];
            var9 = var10.bind(var4)(var9);
            var9 = var9.colors;
            var9 = var9.STATUS_DANGER;
            var6['color'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var2['children'] = var6;
            var2 = var5.bind(var4)(var3, var2);
            return var2;
 386:
            var3 = _closure1_slot17;
            var2 = _closure1_slot1;
            var5 = _closure1_slot3;
            var1 = 16;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var5 = 21;
            var1['size'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function ManageAccounts(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var11 = var1.isEditing;
            var _closure2_slot0 = var11;
            var1 = var1.navigation;
            var _closure2_slot1 = var1;
            var1 = _closure1_slot20;
            var4 = undefined;
            var22 = var1.bind(var4)();
            var _closure2_slot2 = var22;
            var9 = _closure1_slot0;
            var12 = _closure1_slot3;
            var1 = 23;
            var1 = var12[var1];
            var2 = var9.bind(var4)(var1);
            var1 = var2.useMultiAccountUsers;
            var1 = var1.bind(var2)();
            var10 = var1.multiAccountUsers;
            var _closure2_slot3 = var10;
            var1 = 15;
            var1 = var12[var1];
            var5 = var9.bind(var4)(var1);
            var3 = var5.useStateFromStoresObject;
            var1 = _closure1_slot8;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = {};
                var3 = _closure1_slot8;
                var2 = var3.getId;
                var2 = var2.bind(var3)();
                var1['currentUserId'] = var2;
                return var1;
            };
            var1 = var3.bind(var5)(var2, var1);
            var1 = var1.currentUserId;
            var _closure2_slot4 = var1;
            var1 = 24;
            var2 = var12[var1];
            var5 = var9.bind(var4)(var2);
            var3 = var5.useSharedValue;
            var2 = 0;
            var6 = var3.bind(var5)(var2);
            var _closure2_slot5 = var6;
            var1 = var12[var1];
            var3 = var9.bind(var4)(var1);
            var2 = var3.useAnimatedStyle;
            var1 = function c() {
                var1 = {};
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var2 = 25;
                var3 = var3[var2];
                var2 = undefined;
                var5 = var4.bind(var2)(var3);
                var4 = var5.withTiming;
                var3 = _closure2_slot5;
                var2 = var3.get;
                var3 = var2.bind(var3)();
                var2 = {};
                var6 = _closure1_slot12;
                var2['duration'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                var1['width'] = var2;
                return var1;
            };
            var5 = {};
            var7 = 25;
            var7 = var12[var7];
            var7 = var9.bind(var4)(var7);
            var7 = var7.withTiming;
            var5['withTiming'] = var7;
            var5['leadingWidth'] = var6;
            var6 = _closure1_slot12;
            var5['MANAGE_EDIT_TRANSITION_DURATION'] = var6;
            var1['__closure'] = var5;
            var5 = 3389178545077.0;
            var1['__workletHash'] = var5;
            var5 = _closure1_slot21;
            var1['__initData'] = var5;
            var1 = var2.bind(var3)(var1);
            var _closure2_slot6 = var1;
            var6 = _closure1_slot1;
            var1 = 26;
            var1 = var12[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.bind(var4)(var11);
            var _closure2_slot7 = var1;
            var3 = _closure1_slot6;
            var2 = var3.useEffect;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot7;
                    var2 = null;
                    var2 = var2 != var3;
                    if(!var2) { _fun0004_ip = 28; continue _fun0004 }
 16:
                    var4 = _closure2_slot7;
                    var3 = _closure2_slot0;
                    var2 = var4 !== var3;
 28:
                    if(!var2) { _fun0004_ip = 57; continue _fun0004 }
 31:
                    var3 = _closure2_slot5;
                    var2 = var3.set;
                    var4 = _closure2_slot0;
                    var1 = 0;
                    if(!var4) { _fun0004_ip = 52; continue _fun0004 }
 49:
                    var1 = 37;
 52:
                    var1 = var2.bind(var3)(var1);
 57:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var3 = _closure1_slot17;
            var1 = 28;
            var1 = var12[var1];
            var1 = var9.bind(var4)(var1);
            var2 = var1.SafeAreaPaddingView;
            var1 = {};
            var5 = var22.container;
            var1['style'] = var5;
            var8 = true;
            var1['bottom'] = var8;
            var7 = _closure1_slot17;
            var5 = 29;
            var5 = var12[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['data'] = var10;
            var10 = function onRowMoved(arg1) {
                var1 = arg1;
                var5 = var1.from;
                var4 = var1.to;
                var3 = _closure1_slot2;
                var2 = _closure1_slot3;
                var1 = 20;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.moveAccount;
                var2 = var2.bind(var3)(var5, var4);
                return var1;
            };
            var5['onRowMoved'] = var10;
            var10 = !var11;
            var5['disableSorting'] = var10;
            var10 = var22.sortableListView;
            var5['wrapperStyles'] = var10;
            var10 = function renderRow(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var17 = arg1;
                    var _closure3_slot0 = var17;
                    var5 = _closure1_slot17;
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var9 = 30;
                    var1 = var1[var9];
                    var4 = undefined;
                    var3 = var2.bind(var4)(var1);
                    var2 = {};
                    var2['user'] = var17;
                    var8 = _closure2_slot0;
                    var6 = null;
                    if(var8) { _fun0005_ip = 63; continue _fun0005 }
 56:
                    var6 = function() {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                            var2 = _closure3_slot0;
                            var3 = _closure2_slot0;
                            var6 = undefined;
                            var1 = undefined;
                            if(var3) { _fun0006_ip = 187; continue _fun0006 }
 24:
                            var5 = var2.id;
                            var3 = _closure2_slot4;
                            var1 = undefined;
                            if(!(var5 !== var3)) { _fun0006_ip = 187; continue _fun0006 }
 42:
                            var7 = var2.tokenStatus;
                            var5 = _closure1_slot11;
                            var5 = var5.INVALID;
                            if(!(var7 !== var5)) { _fun0006_ip = 105; continue _fun0006 }
 65:
                            var7 = _closure1_slot2;
                            var8 = _closure1_slot3;
                            var5 = 20;
                            var5 = var8[var5];
                            var7 = var7.bind(var6)(var5);
                            var5 = var7.switchAccount;
                            var2 = var2.id;
                            var2 = var5.bind(var7)(var2);
                            var2 = undefined;
                            _fun0006_ip = 184; continue _fun0006;
 105:
                            var7 = _closure2_slot1;
                            var5 = var7.push;
                            var4 = _closure1_slot16;
                            var4 = var4.LOGIN;
                            var4 = var5.bind(var7)(var4);
                            var5 = _closure1_slot1;
                            var7 = _closure1_slot3;
                            var4 = 27;
                            var4 = var7[var4];
                            var6 = var5.bind(var6)(var4);
                            var5 = var6.track;
                            var3 = _closure1_slot15;
                            var4 = var3.LOGIN_VIEWED;
                            var3 = {};
                            var7 = 'multi_account_invalid_user';
                            var3['source'] = var7;
                            var3 = var5.bind(var6)(var4, var3);
                            var2 = undefined;
 184:
                            var1 = var2;
 187:
                            return var1;
                        }
                    };
 63:
                    var2['onPressUser'] = var6;
                    var6 = true;
                    var2['showActiveAccountLabel'] = var6;
                    var8 = _closure1_slot17;
                    var7 = _closure1_slot0;
                    var13 = _closure1_slot3;
                    var10 = 31;
                    var6 = var13[var10];
                    var6 = var7.bind(var4)(var6);
                    var7 = var6.TransitionGroup;
                    var6 = {'component': null, 'transitionEnter': true, 'transitionLeave': true};
                    var12 = _closure1_slot1;
                    var11 = 24;
                    var11 = var13[var11];
                    var11 = var12.bind(var4)(var11);
                    var11 = var11.View;
                    var6['component'] = var11;
                    var11 = _closure2_slot6;
                    var6['style'] = var11;
                    var11 = _closure2_slot0;
                    if(!var11) { _fun0005_ip = 225; continue _fun0005 }
 161:
                    var15 = _closure1_slot17;
                    var13 = _closure1_slot1;
                    var16 = _closure1_slot3;
                    var12 = 32;
                    var12 = var16[var12];
                    var13 = var13.bind(var4)(var12);
                    var12 = {};
                    var16 = _closure1_slot12;
                    var12['duration'] = var16;
                    var19 = _closure1_slot17;
                    var18 = _closure1_slot22;
                    var16 = {};
                    var16['user'] = var17;
                    var16 = var19.bind(var4)(var18, var16);
                    var12['children'] = var16;
                    var11 = var15.bind(var4)(var13, var12);
 225:
                    var6['children'] = var11;
                    var6 = var8.bind(var4)(var7, var6);
                    var2['leading'] = var6;
                    var8 = _closure1_slot17;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var6 = var6[var10];
                    var6 = var7.bind(var4)(var6);
                    var7 = var6.TransitionGroup;
                    var6 = {'component': null, 'transitionEnter': true, 'transitionLeave': true, 'transitionAppear': true};
                    var10 = _closure1_slot7;
                    var6['component'] = var10;
                    var10 = _closure2_slot2;
                    var10 = var10.trailingIconContainer;
                    var6['style'] = var10;
                    var10 = _closure2_slot0;
                    var13 = _closure1_slot17;
                    var12 = _closure1_slot1;
                    var16 = _closure1_slot3;
                    var11 = 32;
                    var11 = var16[var11];
                    var12 = var12.bind(var4)(var11);
                    var11 = {};
                    var15 = _closure1_slot12;
                    var11['duration'] = var15;
                    var15 = _closure2_slot2;
                    var15 = var15.trailingIcon;
                    var11['style'] = var15;
                    var15 = _closure1_slot17;
                    var14 = _closure1_slot0;
                    if(var10) { _fun0005_ip = 412; continue _fun0005 }
 368:
                    var9 = var16[var9];
                    var9 = var14.bind(var4)(var9);
                    var10 = var9.AccountStatusIcon;
                    var9 = {};
                    var9['user'] = var17;
                    var9 = var15.bind(var4)(var10, var9);
                    var11['children'] = var9;
                    var9 = 'status';
                    var9 = var13.bind(var4)(var12, var11, var9);
                    _fun0005_ip = 453; continue _fun0005;
 412:
                    var10 = 33;
                    var10 = var16[var10];
                    var10 = var14.bind(var4)(var10);
                    var14 = var10.DragIcon;
                    var10 = {};
                    var10 = var15.bind(var4)(var14, var10);
                    var11['children'] = var10;
                    var10 = 'drag';
                    var9 = var13.bind(var4)(var12, var11, var10);
 453:
                    var6['children'] = var9;
                    var6 = var8.bind(var4)(var7, var6);
                    var2['trailing'] = var6;
                    var6 = _closure2_slot0;
                    var1 = undefined;
                    if(!var6) { _fun0005_ip = 480; continue _fun0005 }
 477:
                    var1 = 100;
 480:
                    var2['delayLongPress'] = var1;
                    var1 = arg2;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var5['renderRow'] = var10;
            var10 = 'handled';
            var5['keyboardShouldPersistTaps'] = var10;
            var10 = 16;
            var5['scrollEventThrottle'] = var10;
            var5['scrollEnabled'] = var8;
            var10 = _closure1_slot17;
            var8 = 31;
            var8 = var12[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.TransitionGroup;
            var8 = {'component': null, 'transitionEnter': true, 'transitionLeave': true, 'transitionAppear': true};
            var12 = _closure1_slot7;
            var8['component'] = var12;
            var11 = !var11;
            if(!var11) { _fun0003_ip = 741; continue _fun0003 }
 492:
            var14 = _closure1_slot17;
            var28 = _closure1_slot1;
            var26 = _closure1_slot3;
            var12 = 32;
            var12 = var26[var12];
            var13 = var28.bind(var4)(var12);
            var12 = {};
            var15 = _closure1_slot12;
            var12['duration'] = var15;
            var17 = _closure1_slot17;
            var25 = _closure1_slot0;
            var19 = 34;
            var15 = var26[var19];
            var15 = var25.bind(var4)(var15);
            var16 = var15.FormRow;
            var15 = {};
            var24 = _closure1_slot17;
            var21 = 35;
            var21 = var26[var21];
            var21 = var25.bind(var4)(var21);
            var23 = var21.CirclePlusIcon;
            var21 = {};
            var27 = 14;
            var27 = var26[var27];
            var27 = var28.bind(var4)(var27);
            var27 = var27.colors;
            var27 = var27.TEXT_LINK;
            var21['color'] = var27;
            var21 = var24.bind(var4)(var23, var21);
            var15['leading'] = var21;
            var21 = _closure1_slot17;
            var19 = var26[var19];
            var19 = var25.bind(var4)(var19);
            var19 = var19.FormRow;
            var20 = var19.Label;
            var19 = {};
            var22 = var22.addAccountLabel;
            var19['style'] = var22;
            var22 = 18;
            var23 = var26[var22];
            var23 = var25.bind(var4)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var22 = var26[var22];
            var22 = var25.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.bPP34e;
            var22 = var23.bind(var24)(var22);
            var19['text'] = var22;
            var19 = var21.bind(var4)(var20, var19);
            var15['label'] = var19;
            var18 = function onPress() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var2 = _closure2_slot3;
                    var3 = var2.length;
                    var2 = _closure1_slot13;
                    if(!(!(var3 >= var2))) { _fun0007_ip = 107; continue _fun0007 }
 23:
                    var3 = _closure2_slot1;
                    var2 = var3.push;
                    var1 = _closure1_slot16;
                    var1 = var1.LOGIN;
                    var1 = var2.bind(var3)(var1);
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 27;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.track;
                    var1 = _closure1_slot15;
                    var2 = var1.LOGIN_VIEWED;
                    var1 = {};
                    var5 = 'multi_account_add_account';
                    var1['source'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    _fun0007_ip = 264; continue _fun0007;
 107:
                    var2 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var1 = 17;
                    var1 = var10[var1];
                    var9 = undefined;
                    var3 = var2.bind(var9)(var1);
                    var2 = var3.show;
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = 18;
                    var6 = var10[var4];
                    var6 = var5.bind(var9)(var6);
                    var11 = var6.intl;
                    var7 = var11.string;
                    var6 = var10[var4];
                    var6 = var5.bind(var9)(var6);
                    var6 = var6.t;
                    var6 = var6.w7wfXl;
                    var6 = var7.bind(var11)(var6);
                    var1['title'] = var6;
                    var6 = var10[var4];
                    var6 = var5.bind(var9)(var6);
                    var7 = var6.intl;
                    var6 = var7.formatToPlainString;
                    var4 = var10[var4];
                    var4 = var5.bind(var9)(var4);
                    var4 = var4.t;
                    var5 = var4.WOyelJ;
                    var4 = {};
                    var8 = _closure1_slot13;
                    var4['maxNumAccounts'] = var8;
                    var4 = var6.bind(var7)(var5, var4);
                    var1['body'] = var4;
                    var4 = true;
                    var1['isDismissable'] = var4;
                    var1 = var2.bind(var3)(var1);
 264:
                    var1 = undefined;
                    return var1;
                }
            };
            var15['onPress'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var12['children'] = var15;
            var11 = var14.bind(var4)(var13, var12);
 741:
            var8['children'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var5['footer'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot23 = var1;
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
    var4 = var13.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var14 = 1;
    var4 = var6[var14];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var7 = var7.bind(var1)(var4);
    var _closure1_slot6 = var7;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MultiAccountTokenStatus;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.MANAGE_EDIT_TRANSITION_DURATION;
    var _closure1_slot12 = var8;
    var4 = var4.MAX_ACCOUNTS;
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ManageAccountsScreens;
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AnalyticEvents;
    var _closure1_slot15 = var8;
    var4 = var4.AuthStates;
    var _closure1_slot16 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot17 = var8;
    var4 = var4.jsxs;
    var _closure1_slot18 = var4;
    var11 = 12;
    var4 = var6[var11];
    var8 = var5.bind(var1)(var4);
    var4 = var8.createNativeStackNavigator;
    var4 = var4.bind(var8)();
    var _closure1_slot19 = var4;
    var4 = 13;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'backgroundColor': null, 'flex': 1, 'paddingTop': 16};
    var12 = 14;
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BG_BASE_PRIMARY;
    var10['backgroundColor'] = var15;
    var4['container'] = var10;
    var10 = {};
    var10['flex'] = var14;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_PRIMARY;
    var10['backgroundColor'] = var14;
    var4['sortableListView'] = var10;
    var10 = {};
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_LINK;
    var10['color'] = var12;
    var4['addAccountLabel'] = var10;
    var10 = {};
    var10['marginTop'] = var11;
    var4['spinner'] = var10;
    var10 = {'width': 24, 'height': 24};
    var4['trailingIconContainer'] = var10;
    var10 = {};
    var11 = 'absolute';
    var10['position'] = var11;
    var4['trailingIcon'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot20 = var4;
    var4 = {};
    var8 = 'function ManageAccountsModalTsx1(){const{withTiming,leadingWidth,MANAGE_EDIT_TRANSITION_DURATION}=this.__closure;return{width:withTiming(leadingWidth.get(),{duration:MANAGE_EDIT_TRANSITION_DURATION})};}';
    var4['code'] = var8;
    var _closure1_slot21 = var4;
    var4 = var7.memo;
    var2 = function ManageAccountsModal(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var5 = var1.initialRouteName;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0008_ip = 30; continue _fun0008 }
 17:
            var1 = _closure1_slot14;
            var5 = var1.MANAGE_ACCOUNTS;
 30:
            var _closure2_slot0 = var4;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var2 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 36;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useAccessibilityNativeStackOptions;
            var1 = var1.bind(var2)();
            _closure2_slot0 = var1;
            var3 = _closure1_slot6;
            var2 = var3.useState;
            var1 = false;
            var3 = var2.bind(var3)(var1);
            var2 = _closure1_slot4;
            var1 = 2;
            var2 = var2.bind(var4)(var3, var1);
            var1 = 0;
            var1 = var2[var1];
            _closure2_slot1 = var1;
            var1 = 1;
            var1 = var2[var1];
            _closure2_slot2 = var1;
            var3 = _closure1_slot18;
            var6 = _closure1_slot19;
            var2 = var6.Navigator;
            var1 = {};
            var1['initialRouteName'] = var5;
            var5 = function screenOptions(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = arg1;
                    var7 = var1.navigation;
                    var1 = {};
                    var2 = function headerTitle(arg1) {
                        var3 = arg1;
                        var6 = var3.children;
                        var1 = null;
                        var2 = Object.create(var1);
                        var1 = 0;
                        var2['children'] = var1;
                        var9 = {};
                        var8 = var3;
                        var7 = var2;
                        var8 = copyDataProperties(var9, var8, var7);
                        var4 = _closure1_slot17;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 37;
                        var1 = var3[var1];
                        var3 = undefined;
                        var1 = var2.bind(var3)(var1);
                        var2 = var1.GenericHeaderTitle;
                        var1 = {};
                        var1['title'] = var6;
                        var9 = var1;
                        var5 = copyDataProperties(var9, var8);
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    };
                    var1['headerTitle'] = var2;
                    var5 = _closure2_slot1;
                    var3 = undefined;
                    var4 = undefined;
                    if(var5) { _fun0009_ip = 73; continue _fun0009 }
 39:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var5 = 37;
                    var5 = var8[var5];
                    var6 = var6.bind(var3)(var5);
                    var5 = var6.getRenderModalCloseImage;
                    var4 = var5.bind(var6)(var7);
 73:
                    var1['headerLeft'] = var4;
                    var4 = 'center';
                    var1['headerTitleAlign'] = var4;
                    var9 = _closure2_slot0;
                    var10 = var1;
                    var2 = copyDataProperties(var10, var9);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var2 = 38;
                    var2 = var5[var2];
                    var2 = var4.bind(var3)(var2);
                    var9 = var2.bind(var3)();
                    var10 = var1;
                    var2 = copyDataProperties(var10, var9);
                    return var1;
                }
            };
            var1['screenOptions'] = var5;
            var11 = _closure1_slot17;
            var8 = var6.Screen;
            var5 = {};
            var10 = _closure1_slot14;
            var12 = var10.MANAGE_ACCOUNTS;
            var5['name'] = var12;
            var12 = function options() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var1 = {};
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var11 = 18;
                    var5 = var2[var11];
                    var10 = undefined;
                    var5 = var7.bind(var10)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var2 = var2[var11];
                    var2 = var7.bind(var10)(var2);
                    var2 = var2.t;
                    var2 = var2.WbFpq6;
                    var2 = var5.bind(var6)(var2);
                    var1['title'] = var2;
                    var2 = _closure2_slot1;
                    var9 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var5 = 37;
                    var5 = var4[var5];
                    var6 = var9.bind(var10)(var5);
                    var5 = var6.getRenderHeaderTextButton;
                    var7 = var4[var11];
                    var7 = var9.bind(var10)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var4 = var4[var11];
                    var4 = var9.bind(var10)(var4);
                    var4 = var4.t;
                    if(var2) { _fun0010_ip = 163; continue _fun0010 }
 137:
                    var2 = var4.bt75u7;
                    var9 = var7.bind(var8)(var2);
                    var2 = function() {
                        var3 = _closure2_slot2;
                        var2 = undefined;
                        var1 = true;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var2 = var5.bind(var6)(var9, var2);
                    _fun0010_ip = 187; continue _fun0010;
 163:
                    var4 = var4.i4jeWV;
                    var4 = var7.bind(var8)(var4);
                    var3 = function() {
                        var3 = _closure2_slot2;
                        var2 = undefined;
                        var1 = false;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var2 = var5.bind(var6)(var4, var3);
 187:
                    var1['headerRight'] = var2;
                    return var1;
                }
            };
            var5['options'] = var12;
            var12 = function children(arg1) {
                var1 = arg1;
                var1 = var1.navigation;
                var4 = _closure1_slot17;
                var3 = _closure1_slot23;
                var2 = {};
                var5 = _closure2_slot1;
                var2['isEditing'] = var5;
                var2['navigation'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var5['children'] = var12;
            var8 = var11.bind(var4)(var8, var5);
            var5 = new Array(4);
            var5[0] = var8;
            var12 = _closure1_slot17;
            var11 = var6.Screen;
            var8 = {};
            var13 = var10.ACCOUNT_DISABLED_OR_DELETION_SCHEDULED;
            var8['name'] = var13;
            var13 = function options() {
                var1 = {};
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 18;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.WbFpq6;
                var2 = var3.bind(var4)(var2);
                var1['title'] = var2;
                return var1;
            };
            var8['options'] = var13;
            var13 = function children() {
                var4 = _closure1_slot17;
                var2 = _closure1_slot1;
                var3 = _closure1_slot3;
                var1 = 39;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var6 = function handleLogin(arg1, arg2, arg3) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 40;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.login;
                    var2 = {};
                    var5 = arg1;
                    var2['login'] = var5;
                    var5 = arg2;
                    var2['password'] = var5;
                    var5 = arg3;
                    var2['undelete'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['handleLogin'] = var6;
                var5 = function onReset() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 40;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.loginReset;
                    var2 = true;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['onReset'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var8['children'] = var13;
            var8 = var12.bind(var4)(var11, var8);
            var5[1] = var8;
            var12 = _closure1_slot17;
            var11 = var6.Screen;
            var8 = {};
            var13 = var10.LOGIN;
            var8['name'] = var13;
            var13 = function options() {
                var1 = {};
                var2 = false;
                var1['headerShown'] = var2;
                return var1;
            };
            var8['options'] = var13;
            var13 = function children() {
                var4 = _closure1_slot17;
                var2 = _closure1_slot1;
                var3 = _closure1_slot3;
                var1 = 41;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var5 = true;
                var1['isMultiAccount'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var8['children'] = var13;
            var8 = var12.bind(var4)(var11, var8);
            var5[2] = var8;
            var8 = _closure1_slot17;
            var7 = var6.Screen;
            var6 = {};
            var10 = var10.MFA;
            var6['name'] = var10;
            var10 = function options() {
                var1 = {};
                var2 = false;
                var1['headerShown'] = var2;
                return var1;
            };
            var6['options'] = var10;
            var9 = function children() {
                var4 = _closure1_slot17;
                var2 = _closure1_slot1;
                var3 = _closure1_slot3;
                var1 = 42;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 43;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/multi_account/native/ManageAccountsModal.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();