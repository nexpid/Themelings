// app/modules/activities/native/ActivityShareLinkModal.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserRowModes;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot11 = var7;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 10;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['paddingHorizontal'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9['paddingVertical'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BG_BASE_SECONDARY;
    var9['backgroundColor'] = var12;
    var4['headerContainer'] = var9;
    var9 = {'borderBottomWidth': 0, 'shadowColor': 'transparent', 'backgroundColor': 'transparent'};
    var4['header'] = var9;
    var9 = {};
    var12 = 'center';
    var9['textAlign'] = var12;
    var4['title'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_ACTIVE;
    var9['color'] = var12;
    var4['button'] = var9;
    var9 = {'flex': 1, 'display': 'flex'};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BG_BASE_SECONDARY;
    var9['backgroundColor'] = var10;
    var4['container'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = 33;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/native/ActivityShareLinkModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ActivityShareLinkModal(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var21 = var1.applicationId;
            var _closure2_slot0 = var21;
            var25 = var1.customId;
            var _closure2_slot1 = var25;
            var24 = var1.linkId;
            var _closure2_slot2 = var24;
            var16 = var1.message;
            var _closure2_slot3 = var16;
            var12 = var1.onShare;
            var _closure2_slot4 = var12;
            var1 = _closure1_slot13;
            var4 = undefined;
            var20 = var1.bind(var4)();
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 11;
            var2 = var11[var1];
            var6 = var10.bind(var4)(var2);
            var5 = var6.useStateFromStores;
            var2 = _closure1_slot9;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getConnectedActivityChannelId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var5.bind(var6)(var3, var2);
            var _closure2_slot5 = var2;
            var5 = _closure1_slot5;
            var6 = var5.useMemo;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot5;
                    var1 = null;
                    var3 = var1 != var3;
                    var5 = undefined;
                    var1 = undefined;
                    if(!var3) { _fun0002_ip = 58; continue _fun0002 }
 20:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 12;
                    var3 = var6[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.getDestinationIdFromChannelId;
                    var2 = _closure2_slot5;
                    var1 = var3.bind(var4)(var2);
 58:
                    return var1;
                }
            };
            var22 = var6.bind(var5)(var2, var3);
            var2 = var5.useState;
            var7 = false;
            var3 = var2.bind(var5)(var7);
            var6 = _closure1_slot4;
            var2 = 2;
            var3 = var6.bind(var4)(var3, var2);
            var15 = 0;
            var17 = var3[var15];
            var13 = 1;
            var3 = var3[var13];
            var _closure2_slot6 = var3;
            var3 = var5.useState;
            var3 = var3.bind(var5)(var7);
            var3 = var6.bind(var4)(var3, var2);
            var18 = var3[var15];
            var _closure2_slot7 = var18;
            var3 = var3[var13];
            var _closure2_slot8 = var3;
            var7 = var5.useState;
            var3 = new Array(0);
            var3 = var7.bind(var5)(var3);
            var3 = var6.bind(var4)(var3, var2);
            var8 = var3[var15];
            var _closure2_slot9 = var8;
            var3 = var3[var13];
            var _closure2_slot10 = var3;
            var19 = var8.length;
            var23 = var5.useCallback;
            var7 = function(arg1) {
                var3 = _closure2_slot10;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var3 = new Array(0);
            var23 = var23.bind(var5)(var7, var3);
            var1 = var11[var1];
            var26 = var10.bind(var4)(var1);
            var7 = var26.useStateFromStores;
            var1 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var26 = var7.bind(var26)(var3, var1);
            var _closure2_slot11 = var26;
            var3 = var5.useState;
            var1 = '';
            var1 = var3.bind(var5)(var1);
            var2 = var6.bind(var4)(var1, var2);
            var1 = var2[var15];
            var _closure2_slot12 = var1;
            var2 = var2[var13];
            var _closure2_slot13 = var2;
            var7 = var5.useEffect;
            var3 = new Array(5);
            var3[0] = var21;
            var3[1] = var26;
            var3[2] = var25;
            var3[3] = var24;
            var3[4] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot13;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var2);
                    var4 = var5.getActivityLaunchURL;
                    var2 = {};
                    var7 = _closure2_slot0;
                    var2['applicationId'] = var7;
                    var8 = _closure2_slot11;
                    var7 = null;
                    var8 = var7 == var8;
                    var7 = undefined;
                    if(var8) { _fun0003_ip = 72; continue _fun0003 }
 63:
                    var8 = _closure2_slot11;
                    var7 = var8.id;
 72:
                    var2['referrerId'] = var7;
                    var7 = _closure2_slot1;
                    var2['customId'] = var7;
                    var6 = _closure2_slot2;
                    var2['linkId'] = var6;
                    var2 = var4.bind(var5)(var2);
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var2 = var7.bind(var5)(var2, var3);
            var7 = var5.useCallback;
            var3 = new Array(2);
            var3[0] = var18;
            var3[1] = var12;
            var2 = function() {
                var4 = _closure2_slot4;
                var3 = _closure2_slot7;
                var1 = undefined;
                var2 = false;
                var2 = var4.bind(var1)(var2, var3);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 14;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.closeActivityShareLinkModal;
                var2 = var2.bind(var3)();
                return var1;
            };
            var25 = var7.bind(var5)(var2, var3);
            var2 = _closure1_slot1;
            var3 = 15;
            var3 = var11[var3];
            var7 = var2.bind(var4)(var3);
            var3 = new Array(1);
            var3[0] = var21;
            var3 = var7.bind(var4)(var3);
            var3 = var6.bind(var4)(var3, var13);
            var21 = var3[var15];
            var _closure2_slot14 = var21;
            var7 = var5.useCallback;
            var6 = _closure1_slot3;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0004_ip = 401; continue _fun0004 }
 12:
                        var3 = undefined;
                        var _closure4_slot0 = var3;
                        var5 = _closure2_slot14;
                        var2 = null;
                        if(!(var2 != var5)) { _fun0004_ip = 395; continue _fun0004 }
 34:
                        var2 = global;
                        var6 = var2.Promise;
                        var5 = var6.all;
                        var10 = _closure2_slot9;
                        var8 = var10.map;
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var2 = 12;
                        var2 = var12[var2];
                        var2 = var11.bind(var3)(var2);
                        var2 = var2.getOrResolveChannelIdFromDestinationId;
                        var2 = var8.bind(var10)(var2);
                        var2 = var5.bind(var6)(var2);
                        SaveGenerator(address=100);
 98:
                        return var2;
 100:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0004_ip = 398; continue _fun0004 }
 109:
                        var10 = var2.filter;
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var8 = 16;
                        var8 = var6[var8];
                        var8 = var5.bind(var3)(var8);
                        var8 = var8.isNotNullish;
                        var12 = var10.bind(var2)(var8);
                        var11 = 17;
                        var8 = var6[var11];
                        var8 = var5.bind(var3)(var8);
                        var14 = var8.intl;
                        var13 = var14.formatToMarkdownString;
                        var8 = var6[var11];
                        var8 = var5.bind(var3)(var8);
                        var8 = var8.t;
                        var10 = var8.dZJpdH;
                        var8 = {};
                        var15 = _closure2_slot14;
                        var16 = var15.name;
                        var8['applicationName'] = var16;
                        var16 = _closure2_slot12;
                        var8['link'] = var16;
                        var8 = var13.bind(var14)(var10, var8);
                        _closure4_slot0 = var8;
                        var10 = _closure2_slot6;
                        var8 = true;
                        var10 = var10.bind(var3)(var8);
                        var10 = var12.forEach;
                        var9 = function() {
                            var4 = _closure1_slot3;
                            var3 = undefined;
                            var2 = function* (arg1) {
                                var1 = function* anon_0_(arg1) {
                                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                                        StartGenerator();
                                        var6 = arg1;
                                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                        if(var2) { _fun0005_ip = 159; continue _fun0005 }
 13:
                                        var4 = _closure1_slot7;
                                        var3 = var4.getChannel;
                                        var8 = var3.bind(var4)(var6);
                                        var3 = null;
                                        if(!(var3 != var8)) { _fun0005_ip = 151; continue _fun0005 }
 36:
                                        var7 = _closure1_slot1;
                                        var9 = _closure1_slot2;
                                        var2 = 18;
                                        var2 = var9[var2];
                                        var3 = undefined;
                                        var5 = var7.bind(var3)(var2);
                                        var4 = var5.sendMessage;
                                        var2 = 19;
                                        var2 = var9[var2];
                                        var7 = var7.bind(var3)(var2);
                                        var3 = var7.parse;
                                        var12 = _closure2_slot3;
                                        var11 = _closure4_slot0;
                                        var2 = global;
                                        var2 = var2.HermesInternal;
                                        var10 = var2.concat;
                                        var9 = '';
                                        var2 = '\n\n';
                                        var2 = var10.bind(var9)(var12, var2, var11);
                                        var3 = var3.bind(var7)(var8, var2);
                                        var2 = false;
                                        var2 = var4.bind(var5)(var6, var3, var2);
                                        SaveGenerator(address=145);
 143:
                                        return var2;
 145:
                                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                        if(var3) { _fun0005_ip = 156; continue _fun0005 }
 151:
                                        var3 = undefined;
                                        return var3;
 156:
                                        return var2;
 159:
                                        return var1;
                                    }
                                };
                                return var1;
                            };
                            var2 = var4.bind(var3)(var2);
                            var _closure5_slot0 = var2;
                            var1 = function() {
                                var1 = undefined;
                                var4 = _closure5_slot0;
                                var3 = var4.apply;
                                var1 = arguments;
                                var2 = var1;
                                var1 = this;
                                var1 = var3.bind(var4)(var1, var2);
                                return var1;
                            };
                            return var1;
                        };
                        var9 = var9.bind(var3)();
                        var9 = var10.bind(var12)(var9);
                        var9 = _closure1_slot1;
                        var7 = 20;
                        var7 = var6[var7];
                        var10 = var9.bind(var3)(var7);
                        var9 = var10.open;
                        var7 = {};
                        var12 = 'ACTIVITY_SHARE_LINK_SUCCESS';
                        var7['key'] = var12;
                        var12 = var6[var11];
                        var12 = var5.bind(var3)(var12);
                        var14 = var12.intl;
                        var13 = var14.formatToPlainString;
                        var11 = var6[var11];
                        var11 = var5.bind(var3)(var11);
                        var11 = var11.t;
                        var12 = var11.jQULqK;
                        var11 = {};
                        var15 = var15.name;
                        var11['applicationName'] = var15;
                        var11 = var13.bind(var14)(var12, var11);
                        var7['content'] = var11;
                        var7 = var9.bind(var10)(var7);
                        var7 = _closure2_slot4;
                        var4 = _closure2_slot7;
                        var4 = var7.bind(var3)(var8, var4);
                        var4 = 14;
                        var4 = var6[var4];
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.closeActivityShareLinkModal;
                        var4 = var4.bind(var5)();
 395:
                        return var3;
 398:
                        return var2;
 401:
                        return var1;
                    }
                };
                return var1;
            };
            var6 = var6.bind(var4)(var3);
            var3 = new Array(6);
            var3[0] = var21;
            var3[1] = var18;
            var3[2] = var1;
            var3[3] = var16;
            var3[4] = var12;
            var3[5] = var8;
            var16 = var7.bind(var5)(var6, var3);
            var6 = var5.useCallback;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 21;
                var2 = var4[var1];
                var1 = undefined;
                var7 = var3.bind(var1)(var2);
                var6 = var7.copy;
                var5 = _closure2_slot12;
                var5 = var6.bind(var7)(var5);
                var5 = _closure2_slot8;
                var2 = true;
                var2 = var5.bind(var1)(var2);
                var2 = 22;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.presentLinkCopied;
                var2 = var2.bind(var3)();
                return var1;
            };
            var1 = var6.bind(var5)(var1, var3);
            var _closure2_slot15 = var1;
            var1 = 23;
            var1 = var11[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var24 = true;
            var1['ignoreKeyboard'] = var24;
            var1 = var2.bind(var4)(var1);
            var1 = var1.height;
            var _closure2_slot16 = var1;
            var3 = var5.useMemo;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 24;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.isAndroid;
                    var3 = var2.bind(var3)();
                    var2 = '100%';
                    if(!var3) { _fun0006_ip = 52; continue _fun0006 }
 45:
                    var2 = _closure2_slot16;
 52:
                    var1['height'] = var2;
                    return var1;
                }
            };
            var5 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot12;
            var2 = _closure1_slot6;
            var1 = {};
            var1['style'] = var5;
            var6 = _closure1_slot11;
            var5 = {};
            var7 = var20.headerContainer;
            var5['style'] = var7;
            var7 = 25;
            var7 = var11[var7];
            var7 = var10.bind(var4)(var7);
            var8 = var7.Header;
            var7 = {};
            var12 = var20.header;
            var7['headerStyle'] = var12;
            var18 = 17;
            var12 = var11[var18];
            var12 = var10.bind(var4)(var12);
            var26 = var12.intl;
            var21 = var26.string;
            var12 = var11[var18];
            var12 = var10.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.r9qKo6;
            var12 = var21.bind(var26)(var12);
            var7['title'] = var12;
            var12 = function headerTitle(arg1) {
                var1 = arg1;
                var5 = var1.children;
                var4 = _closure1_slot11;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 26;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.GenericHeaderTitle;
                var1 = {};
                var1['title'] = var5;
                var5 = _closure2_slot3;
                var1['subtitle'] = var5;
                var5 = 'redesign/heading-18/bold';
                var1['variant'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var7['headerTitle'] = var12;
            var12 = 27;
            var12 = var11[var12];
            var21 = var10.bind(var4)(var12);
            var12 = var21.getHeaderCloseButton;
            var12 = var12.bind(var21)(var25);
            var7['headerLeft'] = var12;
            var9 = function headerRight(arg1) {
                var4 = _closure1_slot11;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 28;
                var1 = var7[var1];
                var3 = undefined;
                var1 = var6.bind(var3)(var1);
                var2 = var1.HeaderActionButton;
                var1 = {};
                var10 = arg1;
                var11 = var1;
                var5 = copyDataProperties(var11, var10);
                var8 = _closure2_slot15;
                var5 = 'onPress';
                var1[var5] = var8;
                var5 = 17;
                var8 = var7[var5];
                var8 = var6.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var5 = var7[var5];
                var5 = var6.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.Xrt5Pj;
                var8 = var8.bind(var9)(var5);
                var5 = 'accessibilityLabel';
                var1[var5] = var8;
                var5 = 29;
                var5 = var7[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.LinkIcon;
                var5 = 'IconComponent';
                var1[var5] = var6;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var7['headerRight'] = var9;
            var9 = 24;
            var9 = var11[var9];
            var10 = var10.bind(var4)(var9);
            var9 = var10.isIOS;
            var10 = var9.bind(var10)();
            var9 = undefined;
            if(!var10) { _fun0001_ip = 821; continue _fun0001 }
 819:
            var9 = 0;
 821:
            var7['headerStatusBarHeight'] = var9;
            var9 = 'center';
            var7['headerTitleAlign'] = var9;
            var7 = var6.bind(var4)(var8, var7);
            var5['children'] = var7;
            var6 = var6.bind(var4)(var2, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot12;
            var7 = _closure1_slot6;
            var6 = {};
            var9 = var20.container;
            var6['style'] = var9;
            var12 = _closure1_slot11;
            var11 = _closure1_slot1;
            var21 = _closure1_slot2;
            var9 = 30;
            var9 = var21[var9];
            var10 = var11.bind(var4)(var9);
            var9 = {};
            var9['absolute'] = var24;
            var10 = var12.bind(var4)(var10, var9);
            var9 = new Array(3);
            var9[0] = var10;
            var10 = 31;
            var10 = var21[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {'disableGradient': true, 'disableStickySections': true, 'initialSelectedDestinations': null, 'insetEnd': 0};
            var24 = new Array(0);
            var10['initialSelectedDestinations'] = var24;
            var10['onSelectedDestinationChange'] = var23;
            var10['originDestination'] = var22;
            var22 = _closure1_slot10;
            var22 = var22.TOGGLE;
            var10['rowMode'] = var22;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var11 = _closure1_slot0;
            var10 = 32;
            var10 = var21[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.ModalFloatingAction;
            var10 = {};
            var10['disabled'] = var17;
            var20 = var20.container;
            var20 = var20.backgroundColor;
            var10['floatingBackgroundColor'] = var20;
            var15 = var19 > var15;
            var10['isVisible'] = var15;
            var10['loading'] = var17;
            var15 = undefined;
            if(var17) { _fun0001_ip = 1059; continue _fun0001 }
 1056:
            var15 = var16;
 1059:
            var10['onPress'] = var15;
            if(!(var13 !== var19)) { _fun0001_ip = 1128; continue _fun0001 }
 1067:
            var15 = _closure1_slot0;
            var13 = _closure1_slot2;
            var16 = var13[var18];
            var16 = var15.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.formatToPlainString;
            var13 = var13[var18];
            var13 = var15.bind(var4)(var13);
            var13 = var13.t;
            var15 = var13.jWtYUl;
            var13 = {};
            var13['count'] = var19;
            var13 = var16.bind(var17)(var15, var13);
            _fun0001_ip = 1180; continue _fun0001;
 1128:
            var17 = _closure1_slot0;
            var14 = _closure1_slot2;
            var15 = var14[var18];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var14[var18];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.TXNS7e;
            var13 = var15.bind(var16)(var14);
 1180:
            var10['text'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[2] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();