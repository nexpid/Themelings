// app/modules/forums/native/AddMediaToOriginalForumPostActionSheet.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var12 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function _upload2() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 960; continue _fun0001 }
 15:
                    var5 = var2.threadId;
                    var10 = var5;
                    var _closure4_slot0 = var5;
                    var6 = var2.attachments;
                    var5 = var2.setIsUploading;
                    var4 = var5;
                    var _closure4_slot1 = var5;
                    var5 = var2.guild;
                    var8 = var5;
                    var _closure4_slot2 = var5;
                    var2 = var2.analyticsLocations;
                    var7 = var2;
                    var _closure4_slot3 = var2;
                    var5 = undefined;
                    var13 = undefined;
                    var _closure4_slot4 = var5;
                    var17 = undefined;
                    var11 = undefined;
                    var12 = undefined;
                    var15 = undefined;
                    var9 = undefined;
                    SaveGenerator(address=94);
 92:
                    return var5;
 94:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 957; continue _fun0001 }
 103:
                    var20 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var18 = 12;
                    var18 = var16[var18];
                    var18 = var20.bind(var5)(var18);
                    var19 = var18.prototype;
                    var19 = Object.create(var19, {constructor: {value: var18}});
                    var26 = var19;
                    var18 = new var26[var18](var25);
                    var22 = var18 instanceof Object ? var18 : var19;
                    var13 = var22;
                    _closure4_slot4 = var22;
                    var21 = var22.on;
                    var19 = 'start';
                    var18 = function() {
                        var3 = _closure4_slot1;
                        var1 = undefined;
                        var2 = true;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var18 = var21.bind(var22)(var19, var18);
                    var21 = var22.on;
                    var19 = 'progress';
                    var18 = function(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            var6 = arg1;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 13;
                            var3 = var3[var1];
                            var1 = undefined;
                            var7 = var4.bind(var1)(var3);
                            var5 = var7.maxFileSize;
                            var3 = _closure4_slot2;
                            var3 = var3.id;
                            var5 = var5.bind(var7)(var3);
                            var3 = var6.currentSize;
                            if(!(var3 > var5)) { _fun0002_ip = 154; continue _fun0002 }
 61:
                            var7 = _closure4_slot4;
                            var3 = var7.cancel;
                            var3 = var3.bind(var7)();
                            var7 = _closure4_slot1;
                            var3 = false;
                            var3 = var7.bind(var1)(var3);
                            var3 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var2 = 14;
                            var2 = var7[var2];
                            var8 = var3.bind(var1)(var2);
                            var2 = var8.hideActionSheet;
                            var2 = var2.bind(var8)();
                            var2 = 15;
                            var2 = var7[var2];
                            var3 = var3.bind(var1)(var2);
                            var2 = {};
                            var2['file'] = var6;
                            var2['maxSize'] = var5;
                            var4 = _closure4_slot3;
                            var2['analyticsLocations'] = var4;
                            var2 = var3.bind(var1)(var2);
 154:
                            return var1;
                        }
                    };
                    var18 = var21.bind(var22)(var19, var18);
                    var21 = var22.on;
                    var19 = 'error';
                    var18 = function() {
                        var3 = _closure4_slot1;
                        var1 = undefined;
                        var2 = false;
                        var2 = var3.bind(var1)(var2);
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 14;
                        var2 = var4[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.hideActionSheet;
                        var2 = var2.bind(var3)();
                        return var1;
                    };
                    var18 = var21.bind(var22)(var19, var18);
                    var21 = var22.on;
                    var19 = 'complete';
                    var18 = function() {
                        var3 = _closure4_slot1;
                        var1 = undefined;
                        var2 = false;
                        var2 = var3.bind(var1)(var2);
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var6 = 16;
                        var6 = var4[var6];
                        var7 = var3.bind(var1)(var6);
                        var6 = var7.clearAll;
                        var5 = _closure4_slot0;
                        var2 = _closure1_slot8;
                        var2 = var2.ChannelMessage;
                        var2 = var6.bind(var7)(var5, var2);
                        var2 = 14;
                        var2 = var4[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.hideActionSheet;
                        var2 = var2.bind(var3)();
                        return var1;
                    };
                    var18 = var21.bind(var22)(var19, var18);
                    var19 = _closure1_slot10;
                    var18 = var19.getMessages;
                    var21 = var10;
                    var19 = var18.bind(var19)(var21);
                    var18 = var19.get;
                    var22 = 17;
                    var16 = var16[var22];
                    var20 = var20.bind(var5)(var16);
                    var16 = var20.castChannelIdAsMessageId;
                    var16 = var16.bind(var20)(var21);
                    var19 = var18.bind(var19)(var16);
                    var16 = null;
                    if(!(var16 == var19)) { _fun0001_ip = 308; continue _fun0001 }
 302:
                    var18 = new Array(0);
                    _fun0001_ip = 314; continue _fun0001;
 308:
                    var18 = var19.attachments;
 314:
                    var11 = var18;
 317: // try_start_0
                    var18 = var13;
                    var13 = var18.uploadFiles;
                    var6 = var13.bind(var18)(var6);
                    SaveGenerator(address=335);
 333:
                    return var6;
 335:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=12);
                    if(var13) { _fun0001_ip = 833; continue _fun0001 }
 344:
                    var13 = 0;
                    var24 = var11;
                    var11 = new Array(0);
                    var25 = var11;
                    var23 = 0;
                    var13 = arraySpread(var25, var24, var23);
                    var18 = var6.map;
                    var14 = function(arg1, arg2) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 18;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.getAttachmentPayload;
                        var2 = arg1;
                        var1 = arg2;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var14 = var18.bind(var6)(var14);
                    var12 = var14;
                    if(!(var16 == var14)) { _fun0001_ip = 392; continue _fun0001 }
 386:
                    var14 = new Array(0);
                    _fun0001_ip = 395; continue _fun0001;
 392:
                    var14 = var12;
 395:
                    var23 = var13;
                    var25 = var11;
                    var24 = var14;
                    var13 = arraySpread(var25, var24, var23);
                    var17 = var11;
 411: // try_start_1 // try_end0
                    var12 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var11 = 20;
                    var11 = var14[var11];
                    var11 = var12.bind(var5)(var11);
                    var13 = var11.HTTP;
                    var12 = var13.patch;
                    var11 = {};
                    var20 = _closure1_slot12;
                    var19 = var20.MESSAGE;
                    var18 = var10;
                    var21 = _closure1_slot1;
                    var14 = var14[var22];
                    var21 = var21.bind(var5)(var14);
                    var14 = var21.castChannelIdAsMessageId;
                    var14 = var14.bind(var21)(var18);
                    var14 = var19.bind(var20)(var18, var14);
                    var11['url'] = var14;
                    var14 = {};
                    var14['attachments'] = var17;
                    var11['body'] = var14;
                    var14 = true;
                    var11['rejectWithError'] = var14;
                    var11 = var12.bind(var13)(var11);
                    SaveGenerator(address=517);
 515:
                    return var11;
 517:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=11);
                    if(var12) { _fun0001_ip = 528; continue _fun0001 }
 523: // try_end1
                    _fun0001_ip = 830; continue _fun0001;
 528:
                    return var11;
 531: // catch_target1
                    CatchBlockStart(arg_register=12);
                    var12 = var4;
                    var11 = false;
                    var11 = var12.bind(var5)(var11);
                    var12 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var11 = 14;
                    var11 = var14[var11];
                    var17 = var12.bind(var5)(var11);
                    var11 = var17.hideActionSheet;
                    var11 = var11.bind(var17)();
                    var11 = 21;
                    var11 = var14[var11];
                    var11 = var12.bind(var5)(var11);
                    var12 = var11.prototype;
                    var12 = Object.create(var12, {constructor: {value: var11}});
                    var26 = var12;
                    var25 = var13;
                    var11 = new var26[var11](var25, var24);
                    var11 = var11 instanceof Object ? var11 : var12;
                    var9 = var11;
                    var12 = var11.code;
                    var11 = _closure1_slot11;
                    var11 = var11.EXPLICIT_CONTENT;
                    if(!(var12 !== var11)) { _fun0001_ip = 760; continue _fun0001 }
 633:
                    var12 = _closure1_slot1;
                    var20 = _closure1_slot2;
                    var11 = 24;
                    var11 = var20[var11];
                    var13 = var12.bind(var5)(var11);
                    var12 = var13.show;
                    var11 = {};
                    var19 = _closure1_slot0;
                    var14 = 25;
                    var17 = var20[var14];
                    var17 = var19.bind(var5)(var17);
                    var18 = var17.intl;
                    var17 = var18.string;
                    var14 = var20[var14];
                    var14 = var19.bind(var5)(var14);
                    var14 = var14.t;
                    var14 = var14.B3vFdX;
                    var14 = var17.bind(var18)(var14);
                    var11['title'] = var14;
                    var17 = var9;
                    var14 = var17.getAnyErrorMessage;
                    var14 = var14.bind(var17)();
                    var15 = var14;
                    if(!(var16 == var14)) { _fun0001_ip = 746; continue _fun0001 }
 736:
                    var14 = var9;
                    var14 = var14.message;
                    _fun0001_ip = 749; continue _fun0001;
 746:
                    var14 = var15;
 749:
                    var11['body'] = var14;
                    var11 = var12.bind(var13)(var11);
                    _fun0001_ip = 830; continue _fun0001;
 760:
                    var12 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var11 = 22;
                    var11 = var15[var11];
                    var13 = var12.bind(var5)(var11);
                    var12 = var13.sendExplicitMediaClydeError;
                    var11 = var10;
                    var10 = var9.attachments;
                    var14 = _closure1_slot0;
                    var9 = 23;
                    var9 = var15[var9];
                    var9 = var14.bind(var5)(var9);
                    var9 = var9.TrackMediaRedactionContext;
                    var9 = var9.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED;
                    var9 = var12.bind(var13)(var11, var10, var9);
 830:
                    return var5;
 833:
                    return var6;
 836: // catch_target0
                    CatchBlockStart(arg_register=5);
                    var9 = var4;
                    var4 = false;
                    var4 = var9.bind(var5)(var4);
                    var10 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var4 = 14;
                    var4 = var9[var4];
                    var10 = var10.bind(var5)(var4);
                    var4 = var10.hideActionSheet;
                    var4 = var4.bind(var10)();
                    var4 = _closure1_slot0;
                    var3 = 19;
                    var3 = var9[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.handleUploadMessageAttachmentsErrors;
                    var3 = {};
                    var9 = var6.file;
                    var3['file'] = var9;
                    var8 = var8.id;
                    var3['guildId'] = var8;
                    var3['analyticsLocations'] = var7;
                    var7 = var6.code;
                    var3['code'] = var7;
                    var6 = var6.reason;
                    var3['reason'] = var6;
                    var3 = var4.bind(var5)(var3);
                    var3 = undefined;
                    return var3;
 957:
                    return var2;
 960:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot16 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot16 = var1;
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
    var11 = 1;
    var4 = var6[var11];
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
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var13 = 4;
    var4 = var6[var13];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DraftType;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AbortCodes;
    var _closure1_slot11 = var7;
    var4 = var4.Endpoints;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot13 = var7;
    var4 = var4.jsxs;
    var _closure1_slot14 = var4;
    var10 = 10;
    var4 = var6[var10];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'paddingHorizontal': 16, 'paddingTop': 24};
    var4['container'] = var9;
    var9 = {};
    var9['borderWidth'] = var11;
    var11 = 11;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_MODIFIER_ACCENT;
    var9['borderColor'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.md;
    var9['borderRadius'] = var14;
    var14 = 32;
    var9['marginBottom'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BLACK;
    var9['shadowColor'] = var14;
    var14 = {'width': 0, 'height': 1};
    var9['shadowOffset'] = var14;
    var14 = 0.25;
    var9['shadowOpacity'] = var14;
    var9['shadowRadius'] = var13;
    var9['elevation'] = var13;
    var4['post'] = var9;
    var9 = {'marginBottom': 0, 'padding': 8};
    var4['postContent'] = var9;
    var9 = {'textAlign': 'center', 'marginBottom': 8};
    var4['title'] = var9;
    var9 = {'textAlign': 'center', 'marginBottom': 32};
    var4['description'] = var9;
    var9 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var9['borderRadius'] = var11;
    var4['button'] = var9;
    var9 = {};
    var9['marginBottom'] = var10;
    var4['buttonMargin'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot15 = var4;
    var4 = 34;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forums/native/AddMediaToOriginalForumPostActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AddMediaToOriginalForumPostActionSheet(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var17 = var1.threadId;
            var _closure2_slot0 = var17;
            var3 = var1.attachments;
            var _closure2_slot1 = var3;
            var1 = var1.sendMessage;
            var _closure2_slot2 = var1;
            var2 = _closure1_slot15;
            var4 = undefined;
            var13 = var2.bind(var4)();
            var10 = _closure1_slot5;
            var5 = var10.useState;
            var2 = false;
            var2 = var5.bind(var10)(var2);
            var8 = _closure1_slot3;
            var6 = 2;
            var5 = var8.bind(var4)(var2, var6);
            var2 = 0;
            var11 = var5[var2];
            var7 = 1;
            var5 = var5[var7];
            var _closure2_slot3 = var5;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var5 = 26;
            var16 = var15[var5];
            var21 = var14.bind(var4)(var16);
            var20 = var21.useStateFromStores;
            var16 = _closure1_slot7;
            var19 = new Array(1);
            var19[0] = var16;
            var18 = new Array(1);
            var18[0] = var17;
            var16 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var19 = var20.bind(var21)(var19, var16, var18);
            var _closure2_slot4 = var19;
            var16 = var15[var5];
            var22 = var14.bind(var4)(var16);
            var21 = var22.useStateFromStores;
            var16 = _closure1_slot9;
            var20 = new Array(1);
            var20[0] = var16;
            var18 = new Array(1);
            var18[0] = var19;
            var16 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure1_slot9;
                    var2 = var3.getGuild;
                    var5 = _closure2_slot4;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0004_ip = 44; continue _fun0004 }
 30:
                    var5 = _closure2_slot4;
                    var4 = var5.getGuildId;
                    var1 = var4.bind(var5)();
 44:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var18 = var21.bind(var22)(var20, var16, var18);
            var _closure2_slot5 = var18;
            var5 = var15[var5];
            var21 = var14.bind(var4)(var5);
            var20 = var21.useStateFromStores;
            var5 = _closure1_slot10;
            var16 = new Array(1);
            var16[0] = var5;
            var14 = new Array(1);
            var14[0] = var17;
            var5 = function() {
                var4 = _closure1_slot10;
                var3 = var4.getMessage;
                var2 = _closure2_slot0;
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 17;
                var5 = var5[var1];
                var1 = undefined;
                var5 = var6.bind(var1)(var5);
                var1 = var5.castChannelIdAsMessageId;
                var1 = var1.bind(var5)(var2);
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var16 = var20.bind(var21)(var16, var5, var14);
            var _closure2_slot6 = var16;
            var14 = _closure1_slot1;
            var5 = 27;
            var5 = var15[var5];
            var5 = var14.bind(var4)(var5);
            var5 = var5.bind(var4)();
            var5 = var5.analyticsLocations;
            var _closure2_slot7 = var5;
            var15 = var10.useCallback;
            var14 = new Array(6);
            var14[0] = var19;
            var14[1] = var18;
            var14[2] = var16;
            var14[3] = var17;
            var14[4] = var3;
            var14[5] = var5;
            var5 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure2_slot4;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0005_ip = 29; continue _fun0005 }
 13:
                    var2 = _closure2_slot6;
                    if(!(var3 != var2)) { _fun0005_ip = 29; continue _fun0005 }
 21:
                    var2 = _closure2_slot5;
                    if(!(var3 == var2)) { _fun0005_ip = 66; continue _fun0005 }
 29:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 14;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    _fun0005_ip = 171; continue _fun0005;
 66:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 28;
                    var2 = var3[var2];
                    var3 = undefined;
                    var5 = var4.bind(var3)(var2);
                    var4 = var5.trackForumAddMediaToOriginalPostClicked;
                    var2 = {};
                    var6 = true;
                    var2['added'] = var6;
                    var2 = var4.bind(var5)(var2);
                    var2 = {};
                    var4 = _closure2_slot0;
                    var2['threadId'] = var4;
                    var4 = _closure2_slot1;
                    var2['attachments'] = var4;
                    var4 = _closure2_slot3;
                    var2['setIsUploading'] = var4;
                    var4 = _closure2_slot5;
                    var2['guild'] = var4;
                    var1 = _closure2_slot7;
                    var2['analyticsLocations'] = var1;
                    var1 = function _upload() {
                        var1 = undefined;
                        var4 = _closure1_slot16;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var1 = var1.bind(var3)(var2);
 171:
                    var1 = undefined;
                    return var1;
                }
            };
            var19 = var15.bind(var10)(var5, var14);
            var14 = var10.useCallback;
            var5 = new Array(1);
            var5[0] = var1;
            var1 = function() {
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 28;
                var3 = var4[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var3);
                var5 = var6.trackForumAddMediaToOriginalPostClicked;
                var3 = {};
                var7 = false;
                var3['added'] = var7;
                var3 = var5.bind(var6)(var3);
                var3 = _closure1_slot1;
                var2 = 14;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideActionSheet;
                var2 = var2.bind(var3)();
                var2 = _closure2_slot2;
                var2 = var2.bind(var1)();
                return var1;
            };
            var18 = var14.bind(var10)(var1, var5);
            var5 = var10.useState;
            var1 = null;
            var5 = var5.bind(var10)(var1);
            var5 = var8.bind(var4)(var5, var6);
            var6 = var5[var2];
            var5 = var5[var7];
            var _closure2_slot8 = var5;
            var8 = var10.useEffect;
            var7 = new Array(1);
            var7[0] = var3;
            var5 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = _closure2_slot1;
                    var4 = 0;
                    var3 = var2[var4];
                    var2 = null;
                    if(!(var2 != var3)) { _fun0006_ip = 82; continue _fun0006 }
 19:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 29;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var2 = var3.getFileInfo;
                    var1 = _closure2_slot1;
                    var1 = var1[var4];
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.then;
                    var1 = function(arg1) {
                        var3 = _closure2_slot8;
                        var1 = arg1;
                        var2 = var1.uri;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
 82:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var8.bind(var10)(var5, var7);
            var7 = var3[var2];
            var8 = var1 == var7;
            var5 = undefined;
            if(var8) { _fun0003_ip = 437; continue _fun0003 }
 432:
            var5 = var7.item;
 437:
            var7 = var1 != var5;
            var15 = undefined;
            if(!var7) { _fun0003_ip = 512; continue _fun0003 }
 446:
            var1 = var1 != var6;
            var15 = undefined;
            if(!var1) { _fun0003_ip = 512; continue _fun0003 }
 455:
            var1 = {};
            var1['src'] = var6;
            var6 = var5.width;
            var1['width'] = var6;
            var5 = var5.height;
            var1['height'] = var5;
            var5 = var3[var2];
            var5 = var5.spoiler;
            var1['spoiler'] = var5;
            var2 = var3[var2];
            var2 = var2.description;
            var1['alt'] = var2;
            var15 = var1;
 512:
            var3 = _closure1_slot13;
            var20 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 30;
            var1 = var16[var1];
            var1 = var20.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {};
            var5 = true;
            var1['startExpanded'] = var5;
            var7 = _closure1_slot14;
            var6 = _closure1_slot6;
            var5 = {};
            var8 = var13.container;
            var5['style'] = var8;
            var8 = {};
            var10 = 'none';
            var8['pointerEvents'] = var10;
            var10 = var13.post;
            var8['style'] = var10;
            var10 = 31;
            var10 = var16[var10];
            var10 = var20.bind(var4)(var10);
            var14 = var10.ForumPostListDisabled;
            var10 = {};
            var10['threadId'] = var17;
            var10['localDeviceMedia'] = var15;
            var15 = var13.postContent;
            var10['style'] = var15;
            var10 = var3.bind(var4)(var14, var10);
            var8['children'] = var10;
            var10 = var3.bind(var4)(var6, var8);
            var8 = new Array(6);
            var8[0] = var10;
            var10 = 32;
            var14 = var16[var10];
            var14 = var20.bind(var4)(var14);
            var15 = var14.Text;
            var14 = {'style': null, 'accessibilityRole': 'header', 'variant': 'heading-xl/extrabold', 'color': 'header-primary'};
            var17 = var13.title;
            var14['style'] = var17;
            var17 = 25;
            var21 = var16[var17];
            var21 = var20.bind(var4)(var21);
            var23 = var21.intl;
            var22 = var23.string;
            var21 = var16[var17];
            var21 = var20.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.hMWWMT;
            var21 = var22.bind(var23)(var21);
            var14['children'] = var21;
            var14 = var3.bind(var4)(var15, var14);
            var8[1] = var14;
            var10 = var16[var10];
            var10 = var20.bind(var4)(var10);
            var14 = var10.Text;
            var10 = {'style': null, 'variant': 'text-md/medium', 'color': 'header-secondary'};
            var15 = var13.description;
            var10['style'] = var15;
            var15 = var16[var17];
            var15 = var20.bind(var4)(var15);
            var22 = var15.intl;
            var21 = var22.string;
            var15 = var16[var17];
            var15 = var20.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.zMsUsr;
            var15 = var21.bind(var22)(var15);
            var10['children'] = var15;
            var10 = var3.bind(var4)(var14, var10);
            var8[2] = var10;
            var15 = _closure1_slot1;
            var14 = 33;
            var9 = var16[var14];
            var10 = var15.bind(var4)(var9);
            var9 = {};
            var21 = var16[var17];
            var21 = var20.bind(var4)(var21);
            var23 = var21.intl;
            var22 = var23.string;
            var21 = var16[var17];
            var21 = var20.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.d611xM;
            var21 = var22.bind(var23)(var21);
            var9['text'] = var21;
            var21 = var16[var14];
            var21 = var15.bind(var4)(var21);
            var21 = var21.Colors;
            var21 = var21.BRAND;
            var9['color'] = var21;
            var22 = var13.button;
            var21 = new Array(2);
            var21[0] = var22;
            var22 = var13.buttonMargin;
            var21[1] = var22;
            var9['style'] = var21;
            var9['onPress'] = var19;
            var9['loading'] = var11;
            var9 = var3.bind(var4)(var10, var9);
            var8[3] = var9;
            var9 = var16[var14];
            var10 = var15.bind(var4)(var9);
            var9 = {};
            var19 = var16[var17];
            var19 = var20.bind(var4)(var19);
            var22 = var19.intl;
            var21 = var22.string;
            var19 = var16[var17];
            var19 = var20.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.8rKVHB;
            var19 = var21.bind(var22)(var19);
            var9['text'] = var19;
            var19 = var16[var14];
            var19 = var15.bind(var4)(var19);
            var19 = var19.Colors;
            var19 = var19.GREY;
            var9['color'] = var19;
            var21 = var13.button;
            var19 = new Array(2);
            var19[0] = var21;
            var21 = var13.buttonMargin;
            var19[1] = var21;
            var9['style'] = var19;
            var9['onPress'] = var18;
            var9['disabled'] = var11;
            var9 = var3.bind(var4)(var10, var9);
            var8[4] = var9;
            var9 = var16[var14];
            var10 = var15.bind(var4)(var9);
            var9 = {};
            var18 = var16[var17];
            var18 = var20.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var16[var17];
            var17 = var20.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.ETE/oK;
            var17 = var18.bind(var19)(var17);
            var9['text'] = var17;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.Colors;
            var14 = var14.TRANSPARENT;
            var9['color'] = var14;
            var13 = var13.button;
            var9['style'] = var13;
            var12 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.hideActionSheet;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9['onPress'] = var12;
            var9['disabled'] = var11;
            var9 = var3.bind(var4)(var10, var9);
            var8[5] = var9;
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