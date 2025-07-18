// app/modules/icymi/native/ICYMIShareModal.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var12 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var1 = function Screenshot(arg1) {
        var2 = arg1;
        var21 = var2.render;
        var2 = var2.setUri;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot16;
        var4 = undefined;
        var22 = var3.bind(var4)();
        var6 = _closure1_slot5;
        var5 = var6.useRef;
        var3 = null;
        var11 = var5.bind(var6)(var3);
        var _closure2_slot1 = var11;
        var6 = _closure1_slot5;
        var5 = var6.useEffect;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var1 = global;
            var4 = var1.setTimeout;
            var1 = undefined;
            var3 = function() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var1 = _closure2_slot1;
                    var3 = var1.current;
                    var5 = null;
                    var2 = var5 == var3;
                    var1 = undefined;
                    if(var2) { _fun0001_ip = 67; continue _fun0001 }
 23:
                    var2 = var3.capture;
                    var2 = var5 == var2;
                    var1 = undefined;
                    if(var2) { _fun0001_ip = 67; continue _fun0001 }
 38:
                    var2 = var3.capture;
                    var4 = var2.bind(var3)();
                    var3 = var4.then;
                    var2 = function(arg1) {
                        var3 = _closure2_slot0;
                        var1 = undefined;
                        var2 = arg1;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2);
 67:
                    return var1;
                }
            };
            var2 = 500;
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var2 = var5.bind(var6)(var2, var3);
        var15 = _closure1_slot1;
        var20 = _closure1_slot2;
        var2 = 23;
        var2 = var20[var2];
        var2 = var15.bind(var4)(var2);
        var2 = var2.bind(var4)();
        var10 = var2.width;
        var16 = _closure1_slot0;
        var2 = 16;
        var2 = var20[var2];
        var5 = var16.bind(var4)(var2);
        var3 = var5.useStateFromStores;
        var6 = _closure1_slot7;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            var1 = _closure1_slot7;
            var1 = var1.gradientPreset;
            return var1;
        };
        var19 = var3.bind(var5)(var2, var1);
        var1 = 24;
        var1 = var20[var1];
        var2 = var16.bind(var4)(var1);
        var1 = var2.useClientThemesOverride;
        var23 = var1.bind(var2)();
        var3 = _closure1_slot14;
        var2 = _closure1_slot6;
        var1 = {};
        var5 = {'position': 'absolute', 'top': 4294966296, 'overflow': 'hidden'};
        var1['style'] = var5;
        var7 = _closure1_slot14;
        var6 = _closure1_slot6;
        var5 = {};
        var9 = var22.preview;
        var8 = new Array(2);
        var8[0] = var9;
        var9 = {};
        var9['width'] = var10;
        var8[1] = var9;
        var5['style'] = var8;
        var10 = _closure1_slot14;
        var8 = 25;
        var8 = var20[var8];
        var9 = var15.bind(var4)(var8);
        var8 = {};
        var8['ref'] = var11;
        var11 = {'fileName': 'icymi_content', 'format': 'png', 'quality': 1};
        var8['options'] = var11;
        var13 = _closure1_slot15;
        var12 = _closure1_slot6;
        var11 = {};
        var14 = var22.base;
        var11['style'] = var14;
        var17 = _closure1_slot14;
        var14 = 26;
        var14 = var20[var14];
        var15 = var15.bind(var4)(var14);
        var14 = {'absolute': true, 'wide': true, 'tall': true, 'mix': true};
        var24 = {};
        var25 = 27;
        var26 = var20[var25];
        var26 = var16.bind(var4)(var26);
        var26 = var26.OverlayOpacity;
        var26 = var26.LEVEL_7;
        var24['dark'] = var26;
        var25 = var20[var25];
        var25 = var16.bind(var4)(var25);
        var25 = var25.OverlayOpacity;
        var25 = var25.LEVEL_8;
        var24['light'] = var25;
        var14['mixAmount'] = var24;
        var15 = var17.bind(var4)(var15, var14);
        var14 = new Array(2);
        var14[0] = var15;
        var17 = _closure1_slot14;
        var15 = 28;
        var15 = var20[var15];
        var15 = var16.bind(var4)(var15);
        var16 = var15.ThemeContextProvider;
        var15 = {};
        var15['gradient'] = var19;
        var20 = _closure1_slot14;
        var19 = _closure1_slot6;
        var18 = {};
        var24 = var22.contentContainer;
        var22 = new Array(2);
        var22[0] = var24;
        var22[1] = var23;
        var18['style'] = var22;
        var21 = var21.bind(var4)();
        var18['children'] = var21;
        var18 = var20.bind(var4)(var19, var18);
        var15['children'] = var18;
        var15 = var17.bind(var4)(var16, var15);
        var14[1] = var15;
        var11['children'] = var14;
        var11 = var13.bind(var4)(var12, var11);
        var8['children'] = var11;
        var8 = var10.bind(var4)(var9, var8);
        var5['children'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = function GravityShareFooter(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var2 = var1.count;
            var10 = var1.isSending;
            var9 = var1.onSend;
            var _closure2_slot0 = var9;
            var1 = _closure1_slot16;
            var5 = undefined;
            var4 = var1.bind(var5)();
            var _closure2_slot1 = var4;
            var8 = _closure1_slot5;
            var6 = var8.useState;
            var1 = '';
            var8 = var6.bind(var8)(var1);
            var6 = _closure1_slot3;
            var1 = 2;
            var6 = var6.bind(var5)(var8, var1);
            var1 = 0;
            var20 = var6[var1];
            var _closure2_slot2 = var20;
            var8 = 1;
            var19 = var6[var8];
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var6 = 29;
            var6 = var12[var6];
            var11 = var11.bind(var5)(var6);
            var6 = {'includeKeyboardHeightAndroid': true, 'includeKeyboardHeightIOS': true};
            var6 = var11.bind(var5)(var6);
            var11 = var6.insets;
            var _closure2_slot3 = var11;
            var13 = _closure1_slot0;
            var6 = 30;
            var12 = var12[var6];
            var13 = var13.bind(var5)(var12);
            var12 = var13.useShareChatInputActions;
            var12 = var12.bind(var13)(var19);
            var21 = var12.textInputRef;
            var18 = var12.handleSelectionChange;
            var17 = var12.handleMessageFocus;
            var16 = var12.handleMessageBlur;
            var15 = var12.handlePressEmoji;
            var14 = _closure1_slot5;
            var13 = var14.useCallback;
            var12 = new Array(2);
            var12[0] = var20;
            var12[1] = var9;
            var9 = function() {
                var3 = _closure2_slot0;
                var2 = _closure2_slot2;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var12 = var13.bind(var14)(var9, var12);
            if(!(!(var2 <= var8))) { _fun0002_ip = 295; continue _fun0002 }
 231:
            var9 = _closure1_slot0;
            var22 = _closure1_slot2;
            var8 = 15;
            var13 = var22[var8];
            var13 = var9.bind(var5)(var13);
            var14 = var13.intl;
            var13 = var14.formatToPlainString;
            var8 = var22[var8];
            var8 = var9.bind(var5)(var8);
            var8 = var8.t;
            var9 = var8.jWtYUl;
            var8 = {};
            var8['count'] = var2;
            var13 = var13.bind(var14)(var9, var8);
            _fun0002_ip = 350; continue _fun0002;
 295:
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var8 = 15;
            var9 = var23[var8];
            var9 = var22.bind(var5)(var9);
            var14 = var9.intl;
            var9 = var14.string;
            var8 = var23[var8];
            var8 = var22.bind(var5)(var8);
            var8 = var8.t;
            var8 = var8.TXNS7e;
            var13 = var9.bind(var14)(var8);
 350:
            var9 = _closure1_slot5;
            var8 = var9.useMemo;
            var14 = var4.footer;
            var4 = new Array(2);
            var4[0] = var14;
            var11 = var11.bottom;
            var4[1] = var11;
            var3 = function() {
                var4 = _closure2_slot1;
                var2 = var4.footer;
                var1 = new Array(2);
                var1[0] = var2;
                var2 = {};
                var4 = var4.footer;
                var4 = var4.paddingVertical;
                var3 = _closure2_slot3;
                var3 = var3.bottom;
                var3 = var4 + var3;
                var2['paddingBottom'] = var3;
                var1[1] = var2;
                return var1;
            };
            var8 = var8.bind(var9)(var3, var4);
            var11 = var1 === var2;
            var1 = null;
            if(var11) { _fun0002_ip = 586; continue _fun0002 }
 407:
            var4 = _closure1_slot15;
            var3 = _closure1_slot6;
            var2 = {};
            var2['style'] = var8;
            var9 = _closure1_slot14;
            var8 = _closure1_slot1;
            var14 = _closure1_slot2;
            var6 = var14[var6];
            var8 = var8.bind(var5)(var6);
            var6 = {};
            var6['inputRef'] = var21;
            var6['text'] = var20;
            var6['onChange'] = var19;
            var6['onSelectionChange'] = var18;
            var6['onFocus'] = var17;
            var6['onBlur'] = var16;
            var6['onPressEmoji'] = var15;
            var6['onSend'] = var12;
            var6['disabled'] = var10;
            var8 = var9.bind(var5)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var9 = _closure1_slot14;
            var8 = _closure1_slot0;
            var7 = 31;
            var7 = var14[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.Button;
            var7 = {'variant': 'primary', 'size': 'md'};
            var7['text'] = var13;
            var7['disabled'] = var11;
            var11 = undefined;
            if(var10) { _fun0002_ip = 557; continue _fun0002 }
 554:
            var11 = var12;
 557:
            var7['onPress'] = var11;
            var7['loading'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 586:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var4 = function ICYMIShareModal(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var26 = var1.title;
            var _closure2_slot0 = var26;
            var14 = var1.originDestinationId;
            var2 = var1.linkText;
            var _closure2_slot1 = var2;
            var18 = var1.render;
            var _closure2_slot2 = var18;
            var2 = var1.forwardToChannel;
            var _closure2_slot3 = var2;
            var1 = var1.onShare;
            var _closure2_slot4 = var1;
            var3 = _closure1_slot5;
            var2 = var3.useState;
            var1 = new Array(0);
            var2 = var2.bind(var3)(var1);
            var1 = _closure1_slot3;
            var4 = undefined;
            var5 = 2;
            var3 = var1.bind(var4)(var2, var5);
            var22 = 0;
            var1 = var3[var22];
            var _closure2_slot5 = var1;
            var2 = 1;
            var17 = var3[var2];
            var11 = var1.length;
            var7 = _closure1_slot5;
            var3 = var7.useState;
            var1 = false;
            var3 = var3.bind(var7)(var1);
            var1 = _closure1_slot3;
            var1 = var1.bind(var4)(var3, var5);
            var10 = var1[var22];
            var1 = var1[var2];
            var _closure2_slot6 = var1;
            var3 = _closure1_slot5;
            var1 = var3.useState;
            var7 = null;
            var3 = var1.bind(var3)(var7);
            var1 = _closure1_slot3;
            var1 = var1.bind(var4)(var3, var5);
            var3 = var1[var22];
            var _closure2_slot7 = var3;
            var16 = var1[var2];
            var5 = _closure1_slot5;
            var3 = var5.useCallback;
            var2 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 32;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.pop;
                var2 = var2.bind(var3)();
                return var1;
            };
            var1 = new Array(0);
            var23 = var3.bind(var5)(var2, var1);
            var1 = function() {
                var4 = _closure1_slot4;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0004_ip = 256; continue _fun0004 }
 12:
                            var2 = arg1;
                            var _closure5_slot0 = var2;
                            var5 = _closure2_slot6;
                            var3 = undefined;
                            var2 = true;
                            var2 = var5.bind(var3)(var2);
                            var2 = _closure2_slot2;
                            var6 = null;
                            var2 = var6 == var2;
                            if(var2) { _fun0004_ip = 56; continue _fun0004 }
 48:
                            var5 = _closure2_slot7;
                            var2 = var6 != var5;
 56:
                            if(!var2) { _fun0004_ip = 250; continue _fun0004 }
 62:
                            var2 = global;
                            var9 = var2.Promise;
                            var8 = var9.all;
                            var11 = _closure2_slot5;
                            var10 = var11.map;
                            var12 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var2 = 33;
                            var2 = var13[var2];
                            var2 = var12.bind(var3)(var2);
                            var2 = var2.getOrResolveChannelIdFromDestinationId;
                            var2 = var10.bind(var11)(var2);
                            var2 = var8.bind(var9)(var2);
                            SaveGenerator(address=128);
 126:
                            return var2;
 128:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                            if(var8) { _fun0004_ip = 253; continue _fun0004 }
 134:
                            var9 = var2.map;
                            var8 = function(arg1) {
                                var3 = _closure1_slot8;
                                var2 = var3.getChannel;
                                var1 = arg1;
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            };
                            var11 = var9.bind(var2)(var8);
                            var10 = var11.filter;
                            var12 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var9 = 34;
                            var9 = var8[var9];
                            var9 = var12.bind(var3)(var9);
                            var9 = var9.isNotNullish;
                            var10 = var10.bind(var11)(var9);
                            var9 = var10.forEach;
                            var7 = function() {
                                var4 = _closure1_slot4;
                                var3 = undefined;
                                var2 = function* (arg1) {
                                    var1 = function* anon_0_(arg1) {
                                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                                            StartGenerator();
                                            var4 = arg1;
                                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                                            if(var3) { _fun0005_ip = 481; continue _fun0005 }
 15:
                                            var _closure8_slot0 = var4;
                                            var5 = _closure5_slot0;
                                            var9 = null;
                                            if(!(var9 != var5)) { _fun0005_ip = 57; continue _fun0005 }
 32:
                                            var6 = _closure5_slot0;
                                            var5 = var6.trim;
                                            var5 = var5.bind(var6)();
                                            var6 = var5.length;
                                            var5 = 0;
                                            if(!(!(var6 > var5))) { _fun0005_ip = 66; continue _fun0005 }
 57:
                                            var8 = _closure2_slot1;
                                            _fun0005_ip = 107; continue _fun0005;
 66:
                                            var10 = _closure5_slot0;
                                            var7 = _closure2_slot1;
                                            var3 = global;
                                            var3 = var3.HermesInternal;
                                            var6 = var3.concat;
                                            var5 = '';
                                            var3 = '\n\n';
                                            var8 = var6.bind(var5)(var10, var3, var7);
 107:
                                            var7 = _closure1_slot1;
                                            var6 = _closure1_slot2;
                                            var3 = 35;
                                            var6 = var6[var3];
                                            var3 = undefined;
                                            var7 = var7.bind(var3)(var6);
                                            var6 = var7.parse;
                                            var8 = var6.bind(var7)(var4, var8);
                                            var6 = _closure2_slot3;
                                            if(!(var9 != var6)) { _fun0005_ip = 169; continue _fun0005 }
 155:
                                            var6 = _closure2_slot3;
                                            var6 = var6.bind(var3)(var4);
                                            _fun0005_ip = 475; continue _fun0005;
 169:
                                            var6 = _closure2_slot2;
                                            var6 = var9 != var6;
                                            if(!var6) { _fun0005_ip = 188; continue _fun0005 }
 180:
                                            var7 = _closure2_slot7;
                                            var6 = var9 != var7;
 188:
                                            var9 = undefined;
                                            if(!var6) { _fun0005_ip = 400; continue _fun0005 }
 196:
                                            var10 = _closure1_slot1;
                                            var11 = _closure1_slot2;
                                            var7 = 36;
                                            var6 = var11[var7];
                                            var13 = var10.bind(var3)(var6);
                                            var12 = var13.addFile;
                                            var6 = {};
                                            var14 = var4.id;
                                            var6['channelId'] = var14;
                                            var14 = {};
                                            var15 = _closure2_slot7;
                                            var14['uri'] = var15;
                                            var14['originalUri'] = var15;
                                            var16 = _closure1_slot0;
                                            var15 = 37;
                                            var15 = var11[var15];
                                            var17 = var16.bind(var3)(var15);
                                            var15 = var17.v4;
                                            var15 = var15.bind(var17)();
                                            var14['id'] = var15;
                                            var15 = 38;
                                            var15 = var11[var15];
                                            var15 = var16.bind(var3)(var15);
                                            var15 = var15.UploadPlatform;
                                            var15 = var15.REACT_NATIVE;
                                            var14['platform'] = var15;
                                            var6['file'] = var14;
                                            var14 = _closure1_slot9;
                                            var14 = var14.ChannelMessage;
                                            var6['draftType'] = var14;
                                            var6 = var12.bind(var13)(var6);
                                            var14 = _closure1_slot10;
                                            var13 = var14.getUploads;
                                            var12 = var4.id;
                                            var6 = _closure1_slot9;
                                            var6 = var6.ChannelMessage;
                                            var9 = var13.bind(var14)(var12, var6);
                                            var7 = var11[var7];
                                            var12 = var10.bind(var3)(var7);
                                            var11 = var12.clearAll;
                                            var10 = var4.id;
                                            var7 = _closure1_slot9;
                                            var7 = var7.ChannelMessage;
                                            var7 = var11.bind(var12)(var10, var7);
 400:
                                            var6 = _closure1_slot1;
                                            var7 = _closure1_slot2;
                                            var5 = 39;
                                            var5 = var7[var5];
                                            var7 = var6.bind(var3)(var5);
                                            var6 = var7.sendMessage;
                                            var21 = var4.id;
                                            var4 = {};
                                            var4['attachmentsToUpload'] = var9;
                                            var2 = function onAttachmentUploadError(arg1, arg2, arg3) {
                                                var3 = _closure1_slot0;
                                                var2 = _closure1_slot2;
                                                var1 = 40;
                                                var2 = var2[var1];
                                                var1 = undefined;
                                                var4 = var3.bind(var1)(var2);
                                                var3 = var4.handleUploadMessageAttachmentsErrors;
                                                var2 = {};
                                                var5 = arg1;
                                                var2['file'] = var5;
                                                var6 = _closure8_slot0;
                                                var5 = var6.getGuildId;
                                                var5 = var5.bind(var6)();
                                                var2['guildId'] = var5;
                                                var5 = new Array(0);
                                                var2['analyticsLocations'] = var5;
                                                var5 = arg2;
                                                var2['code'] = var5;
                                                var5 = arg3;
                                                var2['reason'] = var5;
                                                var2 = var3.bind(var4)(var2);
                                                return var1;
                                            };
                                            var4['onAttachmentUploadError'] = var2;
                                            var19 = false;
                                            var22 = var7;
                                            var20 = var8;
                                            var18 = var4;
                                            var2 = var22[var6](var21, var20, var19, var18, var17);
                                            SaveGenerator(address=469);
 467:
                                            return var2;
 469:
                                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                            if(var4) { _fun0005_ip = 478; continue _fun0005 }
 475:
                                            return var3;
 478:
                                            return var2;
 481:
                                            return var1;
                                        }
                                    };
                                    return var1;
                                };
                                var2 = var4.bind(var3)(var2);
                                var _closure6_slot0 = var2;
                                var1 = function() {
                                    var1 = undefined;
                                    var4 = _closure6_slot0;
                                    var3 = var4.apply;
                                    var1 = arguments;
                                    var2 = var1;
                                    var1 = this;
                                    var1 = var3.bind(var4)(var1, var2);
                                    return var1;
                                };
                                return var1;
                            };
                            var7 = var7.bind(var3)();
                            var7 = var9.bind(var10)(var7);
                            var7 = _closure1_slot1;
                            var5 = 32;
                            var5 = var8[var5];
                            var7 = var7.bind(var3)(var5);
                            var5 = var7.pop;
                            var5 = var5.bind(var7)();
                            var5 = _closure2_slot4;
                            if(!(var6 != var5)) { _fun0004_ip = 250; continue _fun0004 }
 242:
                            var4 = _closure2_slot4;
                            var4 = var4.bind(var3)();
 250:
                            return var3;
 253:
                            return var2;
 256:
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
            var9 = var1.bind(var4)();
            var1 = _closure1_slot16;
            var15 = var1.bind(var4)();
            var2 = _closure1_slot1;
            var25 = _closure1_slot2;
            var1 = 41;
            var1 = var25[var1];
            var1 = var2.bind(var4)(var1);
            var13 = var1.bind(var4)();
            var _closure2_slot8 = var13;
            var1 = 23;
            var1 = var25[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var1 = var1.height;
            var _closure2_slot9 = var1;
            var5 = _closure1_slot5;
            var3 = var5.useMemo;
            var8 = var13.bottom;
            var2 = new Array(2);
            var2[0] = var8;
            var2[1] = var1;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 42;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.isAndroid;
                    var3 = var2.bind(var3)();
                    var2 = '100%';
                    if(!var3) { _fun0006_ip = 65; continue _fun0006 }
 45:
                    var4 = _closure2_slot9;
                    var3 = _closure2_slot8;
                    var3 = var3.bottom;
                    var2 = var4 + var3;
 65:
                    var1['height'] = var2;
                    return var1;
                }
            };
            var5 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot15;
            var2 = _closure1_slot6;
            var1 = {};
            var1['style'] = var5;
            var12 = _closure1_slot14;
            var8 = _closure1_slot6;
            var5 = {};
            var15 = var15.headerContainer;
            var5['style'] = var15;
            var20 = _closure1_slot14;
            var24 = _closure1_slot0;
            var15 = 43;
            var15 = var25[var15];
            var15 = var24.bind(var4)(var15);
            var19 = var15.Header;
            var15 = {};
            var15['title'] = var26;
            var21 = function headerTitle() {
                var4 = _closure1_slot14;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 44;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.GenericHeaderTitle;
                var1 = {};
                var5 = _closure2_slot0;
                var1['title'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var15['headerTitle'] = var21;
            var21 = 'center';
            var15['headerTitleAlign'] = var21;
            var21 = 42;
            var21 = var25[var21];
            var24 = var24.bind(var4)(var21);
            var21 = var24.isIOS;
            var24 = var21.bind(var24)();
            var21 = undefined;
            if(!var24) { _fun0003_ip = 447; continue _fun0003 }
 445:
            var21 = 0;
 447:
            var15['headerStatusBarHeight'] = var21;
            var22 = _closure1_slot0;
            var24 = _closure1_slot2;
            var21 = 45;
            var21 = var24[var21];
            var22 = var22.bind(var4)(var21);
            var21 = var22.getHeaderCloseButton;
            var21 = var21.bind(var22)(var23);
            var15['headerLeft'] = var21;
            var15 = var20.bind(var4)(var19, var15);
            var5['children'] = var15;
            var8 = var12.bind(var4)(var8, var5);
            var5 = new Array(4);
            var5[0] = var8;
            var7 = var7 != var18;
            if(!var7) { _fun0003_ip = 545; continue _fun0003 }
 519:
            var15 = _closure1_slot14;
            var12 = _closure1_slot17;
            var8 = {};
            var8['render'] = var18;
            var8['setUri'] = var16;
            var7 = var15.bind(var4)(var12, var8);
 545:
            var5[1] = var7;
            var12 = _closure1_slot14;
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var7 = 46;
            var7 = var16[var7];
            var8 = var15.bind(var4)(var7);
            var7 = {};
            var18 = _closure1_slot13;
            var18 = var18.TOGGLE;
            var7['rowMode'] = var18;
            var7['onSelectedDestinationChange'] = var17;
            var7['originDestination'] = var14;
            var17 = var13.bottom;
            var13 = 13;
            var14 = var16[var13];
            var14 = var15.bind(var4)(var14);
            var14 = var14.spacing;
            var14 = var14.PX_8;
            var14 = var17 + var14;
            var13 = var16[var13];
            var13 = var15.bind(var4)(var13);
            var13 = var13.spacing;
            var13 = var13.PX_96;
            var13 = var14 + var13;
            var7['insetEnd'] = var13;
            var13 = true;
            var7['disableGradient'] = var13;
            var7['disableStickySections'] = var13;
            var7 = var12.bind(var4)(var8, var7);
            var5[2] = var7;
            var8 = _closure1_slot14;
            var7 = _closure1_slot18;
            var6 = {};
            var6['count'] = var11;
            var6['isSending'] = var10;
            var6['onSend'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot19 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var12.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var13 = 1;
    var5 = var7[var13];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var8 = var7[var5];
    var5 = native4;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.View;
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.DraftType;
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var12.bind(var1)(var5);
    var _closure1_slot11 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.AbortCodes;
    var _closure1_slot12 = var5;
    var5 = 10;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.UserRowModes;
    var _closure1_slot13 = var5;
    var5 = 11;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot14 = var8;
    var5 = var5.jsxs;
    var _closure1_slot15 = var5;
    var5 = 12;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {};
    var11 = 13;
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var10['paddingHorizontal'] = var14;
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var10['paddingTop'] = var14;
    var5['headerContainer'] = var10;
    var10 = {'borderRadius': null, 'overflow': 'hidden', 'borderWidth': 1};
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.md;
    var10['borderRadius'] = var14;
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BORDER_STRONG;
    var10['borderColor'] = var14;
    var5['preview'] = var10;
    var10 = {};
    var14 = 0.5;
    var10['opacity'] = var14;
    var5['loading'] = var10;
    var10 = {};
    var14 = 'relative';
    var10['position'] = var14;
    var5['base'] = var10;
    var10 = {};
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BG_BASE_PRIMARY;
    var10['backgroundColor'] = var14;
    var5['contentContainer'] = var10;
    var10 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'flex-end'};
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var10['paddingHorizontal'] = var14;
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_12;
    var10['paddingVertical'] = var14;
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_12;
    var10['gap'] = var14;
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BG_BASE_PRIMARY;
    var10['backgroundColor'] = var14;
    var10['borderTopWidth'] = var13;
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BORDER_SUBTLE;
    var10['borderTopColor'] = var11;
    var5['footer'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot16 = var5;
    var5 = 47;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/icymi/native/ICYMIShareModal.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var4 = function GuildEventShareModal(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var8 = var1.event;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 14;
            var2 = var11[var2];
            var4 = undefined;
            var5 = var10.bind(var4)(var2);
            var3 = var5.SHARE_EVENT_DETAILS_LINK;
            var2 = {};
            var6 = var8.guild_id;
            var2['guildId'] = var6;
            var6 = var8.id;
            var2['guildEventId'] = var6;
            var5 = var3.bind(var5)(var2);
            var3 = _closure1_slot14;
            var2 = _closure1_slot19;
            var1 = {};
            var6 = 15;
            var7 = var11[var6];
            var7 = var10.bind(var4)(var7);
            var9 = var7.intl;
            var7 = var9.string;
            var6 = var11[var6];
            var6 = var10.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.7TVSLC;
            var6 = var7.bind(var9)(var6);
            var1['title'] = var6;
            var7 = var8.channel_id;
            var6 = null;
            var7 = var6 != var7;
            var6 = undefined;
            if(!var7) { _fun0007_ip = 167; continue _fun0007 }
 145:
            var7 = {};
            var9 = 'channel';
            var7['type'] = var9;
            var8 = var8.channel_id;
            var7['id'] = var8;
            var6 = var7;
 167:
            var1['originDestinationId'] = var6;
            var1['linkText'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['GuildEventShareModal'] = var4;
    var4 = function SummaryShareModal(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var1 = var1.topicId;
            var _closure2_slot0 = var1;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 16;
            var1 = var3[var1];
            var5 = undefined;
            var4 = var2.bind(var5)(var1);
            var3 = var4.useStateFromStores;
            var1 = _closure1_slot11;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot11;
                var2 = var3.getHydratedItem;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9 = var3.bind(var4)(var2, var1);
            var _closure2_slot1 = var9;
            var7 = _closure1_slot5;
            var4 = var7.useMemo;
            var1 = null;
            var3 = var1 == var9;
            var2 = undefined;
            if(var3) { _fun0008_ip = 105; continue _fun0008 }
 94:
            var3 = var9.summary;
            var2 = var3.channelId;
 105:
            var3 = new Array(3);
            var3[0] = var2;
            var10 = var1 == var9;
            var2 = undefined;
            if(var10) { _fun0008_ip = 133; continue _fun0008 }
 122:
            var10 = var9.summary;
            var2 = var10.guildId;
 133:
            var3[1] = var2;
            var10 = var1 == var9;
            var2 = undefined;
            if(var10) { _fun0008_ip = 158; continue _fun0008 }
 146:
            var10 = var9.summary;
            var2 = var10.startId;
 158:
            var3[2] = var2;
            var2 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.getChannelPermalink;
                    var2 = _closure2_slot1;
                    var8 = null;
                    var2 = var8 == var2;
                    var3 = undefined;
                    if(var2) { _fun0009_ip = 64; continue _fun0009 }
 49:
                    var2 = _closure2_slot1;
                    var2 = var2.summary;
                    var3 = var2.guildId;
 64:
                    var2 = _closure2_slot1;
                    var7 = var8 == var2;
                    var2 = undefined;
                    if(var7) { _fun0009_ip = 92; continue _fun0009 }
 77:
                    var7 = _closure2_slot1;
                    var7 = var7.summary;
                    var2 = var7.channelId;
 92:
                    var7 = _closure2_slot1;
                    var7 = var8 == var7;
                    var1 = undefined;
                    if(var7) { _fun0009_ip = 121; continue _fun0009 }
 105:
                    var6 = _closure2_slot1;
                    var6 = var6.summary;
                    var1 = var6.startId;
 121:
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var1;
                }
            };
            var7 = var4.bind(var7)(var2, var3);
            var2 = var1 == var9;
            var1 = null;
            if(var2) { _fun0008_ip = 311; continue _fun0008 }
 187:
            var4 = _closure1_slot14;
            var3 = _closure1_slot19;
            var2 = {};
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 15;
            var10 = var13[var8];
            var10 = var12.bind(var5)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var8 = var13[var8];
            var8 = var12.bind(var5)(var8);
            var8 = var8.t;
            var8 = var8.J7dBxc;
            var8 = var10.bind(var11)(var8);
            var2['title'] = var8;
            var8 = {};
            var10 = 'channel';
            var8['type'] = var10;
            var9 = var9.summary;
            var9 = var9.channelId;
            var8['id'] = var9;
            var2['originDestinationId'] = var8;
            var2['linkText'] = var7;
            var6 = function render() {
                var4 = _closure1_slot14;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 18;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var5 = _closure2_slot1;
                var5 = var5.summary;
                var1['topic'] = var5;
                var5 = true;
                var1['disableInteractions'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var2['render'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 311:
            return var1;
        }
    };
    var3['SummaryShareModal'] = var4;
    var4 = function GameShareModal(arg1) {
        var1 = arg1;
        var1 = var1.content;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot14;
        var3 = _closure1_slot19;
        var2 = {};
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var6 = 15;
        var7 = var10[var6];
        var1 = undefined;
        var7 = var9.bind(var1)(var7);
        var8 = var7.intl;
        var7 = var8.string;
        var6 = var10[var6];
        var6 = var9.bind(var1)(var6);
        var6 = var6.t;
        var6 = var6.59CWHB;
        var6 = var7.bind(var8)(var6);
        var2['title'] = var6;
        var6 = '';
        var2['linkText'] = var6;
        var5 = function() {
            var4 = _closure1_slot4;
            var3 = undefined;
            var2 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0010_ip = 284; continue _fun0010 }
 10:
                        var6 = arg1;
 13: // try_start_0
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 19;
                        var4 = var4[var2];
                        var2 = undefined;
                        var5 = var5.bind(var2)(var4);
                        var4 = var5.sendMessageWithEmbed;
                        var2 = {'channel': null, 'content': '', 'entry': null, 'whenReady': false, 'doNotNotifyOnError': true};
                        var2['channel'] = var6;
                        var6 = _closure2_slot0;
                        var2['entry'] = var6;
                        var2 = var4.bind(var5)(var2);
                        SaveGenerator(address=86);
 84:
                        return var2;
 86:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0010_ip = 97; continue _fun0010 }
 92: // try_end0
                        _fun0010_ip = 279; continue _fun0010;
 97:
                        return var2;
 100: // catch_target0
                        CatchBlockStart(arg_register=3);
                        var3 = var4;
                        var5 = var4.body;
                        var4 = null;
                        var4 = var4 != var5;
                        var2 = var4;
                        if(!var4) { _fun0010_ip = 149; continue _fun0010 }
 122:
                        var3 = var3.body;
                        var4 = var3.code;
                        var3 = _closure1_slot12;
                        var3 = var3.CONTENT_INVENTORY_ENTRY_INVALID_PERMISSION;
                        var2 = var4 === var3;
 149:
                        var5 = var2;
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 20;
                        var2 = var4[var2];
                        var10 = undefined;
                        var4 = var3.bind(var10)(var2);
                        var3 = var4.open;
                        var2 = {};
                        var7 = 'FORWARD_CONTENT_INVENTORY_ENTRY_ERROR';
                        var2['key'] = var7;
                        var9 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var6 = 15;
                        var7 = var11[var6];
                        var7 = var9.bind(var10)(var7);
                        var8 = var7.intl;
                        var7 = var8.string;
                        var6 = var11[var6];
                        var6 = var9.bind(var10)(var6);
                        var6 = var6.t;
                        if(var5) { _fun0010_ip = 257; continue _fun0010 }
 242:
                        var5 = var6.F8FvU1;
                        var5 = var7.bind(var8)(var5);
                        _fun0010_ip = 270; continue _fun0010;
 257:
                        var6 = var6.BC5vfH;
                        var5 = var7.bind(var8)(var6);
 270:
                        var2['content'] = var5;
                        var2 = var3.bind(var4)(var2);
 279:
                        var2 = undefined;
                        return var2;
 284:
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
        var5 = var5.bind(var1)();
        var2['forwardToChannel'] = var5;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['GameShareModal'] = var4;
    var2 = function GeneratedCandidateShareModal(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var1 = arg1;
            var9 = var1.item;
            var _closure2_slot0 = var9;
            var5 = var1.onShare;
            var4 = _closure1_slot5;
            var3 = var4.useMemo;
            var1 = var9.guild_id;
            var2 = new Array(3);
            var2[0] = var1;
            var1 = var9.channel_id;
            var2[1] = var1;
            var1 = var9.message_ids;
            var2[2] = var1;
            var1 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.getChannelPermalink;
                    var1 = _closure2_slot0;
                    var3 = var1.guild_id;
                    var2 = var1.channel_id;
                    var6 = var1.message_ids;
                    var1 = 0;
                    var6 = var6[var1];
                    var1 = null;
                    var7 = var1 != var6;
                    if(!var7) { _fun0012_ip = 72; continue _fun0012 }
 69:
                    var1 = var6;
 72:
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var1;
                }
            };
            var7 = var3.bind(var4)(var1, var2);
            var4 = _closure1_slot14;
            var3 = _closure1_slot19;
            var2 = {};
            var11 = var9.type;
            var12 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 21;
            var8 = var8[var1];
            var1 = undefined;
            var8 = var12.bind(var1)(var8);
            var8 = var8.GeneratedCandidateType;
            var8 = var8.TRENDING_TOPIC;
            if(!(var11 !== var8)) { _fun0011_ip = 189; continue _fun0011 }
 130:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 15;
            var11 = var14[var8];
            var11 = var13.bind(var1)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var8 = var14[var8];
            var8 = var13.bind(var1)(var8);
            var8 = var8.t;
            var8 = var8.NPVaws;
            var8 = var11.bind(var12)(var8);
            _fun0011_ip = 246; continue _fun0011;
 189:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 15;
            var11 = var14[var10];
            var11 = var13.bind(var1)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var1)(var10);
            var10 = var10.t;
            var10 = var10.F2Smnp;
            var8 = var11.bind(var12)(var10);
 246:
            var2['title'] = var8;
            var8 = {};
            var10 = 'channel';
            var8['type'] = var10;
            var9 = var9.channel_id;
            var8['id'] = var9;
            var2['originDestinationId'] = var8;
            var2['linkText'] = var7;
            var6 = function render() {
                var4 = _closure1_slot14;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 22;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var5 = _closure2_slot0;
                var1['item'] = var5;
                var5 = true;
                var1['disableInteractions'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var2['render'] = var6;
            var2['onShare'] = var5;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        }
    };
    var3['GeneratedCandidateShareModal'] = var2;
    return var1;
})();