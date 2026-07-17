// app/modules/forums/native/AddMediaToOriginalForumPostActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var5 = var2.threadId;
                    var11 = var5;
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
                    var18 = undefined;
                    var9 = undefined;
                    var12 = undefined;
                    var16 = undefined;
                    var10 = undefined;
                    SaveGenerator(address=94);
case 4:
                    return var5;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var20 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var17 = 12;
                    var17 = var15[var17];
                    var17 = var20.bind(var5)(var17);
                    var19 = var17.prototype;
                    var19 = Object.create(var19, {constructor: {value: var17}});
                    var27 = var19;
                    var17 = new var27[var17](var26);
                    var22 = var17 instanceof Object ? var17 : var19;
                    var13 = var22;
                    _closure4_slot4 = var22;
                    var21 = var22.on;
                    var19 = 'start';
                    var17 = function() {
                        var3 = _closure4_slot1;
                        var1 = undefined;
                        var2 = true;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var17 = var21.bind(var22)(var19, var17);
                    var21 = var22.on;
                    var19 = 'progress';
                    var17 = function(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            var6 = arg1;
                            var4 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var3 = 13;
                            var5 = var9[var3];
                            var1 = undefined;
                            var8 = var4.bind(var1)(var5);
                            var7 = var8.getKestrelConfig;
                            var5 = {};
                            var10 = 'native.AddMediaToOriginalForumPostActionSheet';
                            var5['location'] = var10;
                            var8 = var7.bind(var8)(var5);
                            var3 = var9[var3];
                            var7 = var4.bind(var1)(var3);
                            var5 = var7.getEffectiveKestrelLimit;
                            var3 = 14;
                            var3 = var9[var3];
                            var10 = var4.bind(var1)(var3);
                            var9 = var10.maxFileSize;
                            var3 = _closure4_slot2;
                            var3 = var3.id;
                            var3 = var9.bind(var10)(var3);
                            var5 = var5.bind(var7)(var8, var3);
                            var3 = var6.currentSize;
                            if(!(var3 > var5)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                            var7 = _closure4_slot4;
                            var3 = var7.cancel;
                            var3 = var3.bind(var7)();
                            var7 = _closure4_slot1;
                            var3 = false;
                            var3 = var7.bind(var1)(var3);
                            var3 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var2 = 15;
                            var2 = var7[var2];
                            var8 = var3.bind(var1)(var2);
                            var2 = var8.hideActionSheet;
                            var2 = var2.bind(var8)();
                            var2 = 16;
                            var2 = var7[var2];
                            var3 = var3.bind(var1)(var2);
                            var2 = {};
                            var2['file'] = var6;
                            var2['maxSize'] = var5;
                            var4 = _closure4_slot3;
                            var2['analyticsLocations'] = var4;
                            var2 = var3.bind(var1)(var2);
case 8:
                            return var1;
                        }
                    };
                    var17 = var21.bind(var22)(var19, var17);
                    var21 = var22.on;
                    var19 = 'error';
                    var17 = function() {
                        var3 = _closure4_slot1;
                        var1 = undefined;
                        var2 = false;
                        var2 = var3.bind(var1)(var2);
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 15;
                        var2 = var4[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.hideActionSheet;
                        var2 = var2.bind(var3)();
                        return var1;
                    };
                    var17 = var21.bind(var22)(var19, var17);
                    var21 = var22.on;
                    var19 = 'complete';
                    var17 = function() {
                        var3 = _closure4_slot1;
                        var1 = undefined;
                        var2 = false;
                        var2 = var3.bind(var1)(var2);
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var6 = 17;
                        var6 = var4[var6];
                        var7 = var3.bind(var1)(var6);
                        var6 = var7.clearAll;
                        var5 = _closure4_slot0;
                        var2 = _closure1_slot8;
                        var2 = var2.ChannelMessage;
                        var2 = var6.bind(var7)(var5, var2);
                        var2 = 15;
                        var2 = var4[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.hideActionSheet;
                        var2 = var2.bind(var3)();
                        return var1;
                    };
                    var17 = var21.bind(var22)(var19, var17);
                    var19 = _closure1_slot10;
                    var17 = var19.getMessages;
                    var21 = var11;
                    var19 = var17.bind(var19)(var21);
                    var17 = var19.get;
                    var23 = 18;
                    var15 = var15[var23];
                    var20 = var20.bind(var5)(var15);
                    var15 = var20.castChannelIdAsMessageId;
                    var15 = var15.bind(var20)(var21);
                    var19 = var17.bind(var19)(var15);
                    var17 = null;
                    if(!(var17 == var19)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var15 = new Array(0);
                    _fun0001_ip = 12; continue _fun0001;
case 10:
                    var15 = var19.attachments;
case 12:
                    var9 = var15;
case 13: // try_start_0
                    var15 = var13;
                    var13 = var15.uploadFiles;
                    var6 = var13.bind(var15)(var6);
                    SaveGenerator(address=335);
case 14:
                    return var6;
case 15:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=12);
                    if(var13) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                    var13 = 0;
                    var25 = var9;
                    var9 = new Array(0);
                    var26 = var9;
                    var24 = 0;
                    var13 = arraySpread(var26, var25, var24);
                    var15 = var6.map;
                    var14 = function(arg1, arg2) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 19;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.getAttachmentPayload;
                        var2 = arg1;
                        var1 = arg2;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var14 = var15.bind(var6)(var14);
                    var12 = var14;
                    if(!(var17 == var14)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                    var14 = new Array(0);
                    _fun0001_ip = 20; continue _fun0001;
case 18:
                    var14 = var12;
case 20:
                    var24 = var13;
                    var26 = var9;
                    var25 = var14;
                    var13 = arraySpread(var26, var25, var24);
                    var18 = var9;
case 21: // try_start_1 // try_end0
                    var12 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var9 = 21;
                    var9 = var13[var9];
                    var13 = var12.bind(var5)(var9);
                    var12 = var13.unarchiveThreadIfNecessary;
                    var9 = var11;
                    var9 = var12.bind(var13)(var9);
                    SaveGenerator(address=449);
case 22:
                    return var9;
case 23:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=11);
                    if(var12) { _fun0001_ip = 24; continue _fun0001 }
case 25: // try_start_2 // try_end1
                    var13 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var12 = 22;
                    var12 = var15[var12];
                    var12 = var13.bind(var5)(var12);
                    var14 = var12.HTTP;
                    var13 = var14.patch;
                    var12 = {};
                    var21 = _closure1_slot12;
                    var20 = var21.MESSAGE;
                    var19 = var11;
                    var22 = _closure1_slot1;
                    var15 = var15[var23];
                    var22 = var22.bind(var5)(var15);
                    var15 = var22.castChannelIdAsMessageId;
                    var15 = var15.bind(var22)(var19);
                    var15 = var20.bind(var21)(var19, var15);
                    var12['url'] = var15;
                    var15 = {};
                    var15['attachments'] = var18;
                    var12['body'] = var15;
                    var15 = true;
                    var12['rejectWithError'] = var15;
                    var12 = var13.bind(var14)(var12);
                    SaveGenerator(address=564);
case 26:
                    return var12;
case 27:
                    ResumeGenerator(result_out_reg=11, return_bool_out_reg=12);
                    if(var13) { _fun0001_ip = 28; continue _fun0001 }
case 29: // try_end2
                    _fun0001_ip = 30; continue _fun0001;
case 28:
                    return var12;
case 31: // catch_target2
                    CatchBlockStart(arg_register=13);
                    var13 = var4;
                    var12 = false;
                    var12 = var13.bind(var5)(var12);
                    var13 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var12 = 15;
                    var12 = var15[var12];
                    var18 = var13.bind(var5)(var12);
                    var12 = var18.hideActionSheet;
                    var12 = var12.bind(var18)();
                    var12 = 23;
                    var12 = var15[var12];
                    var12 = var13.bind(var5)(var12);
                    var13 = var12.prototype;
                    var13 = Object.create(var13, {constructor: {value: var12}});
                    var27 = var13;
                    var26 = var14;
                    var12 = new var27[var12](var26, var25);
                    var12 = var12 instanceof Object ? var12 : var13;
                    var10 = var12;
                    var13 = var12.code;
                    var12 = _closure1_slot11;
                    var12 = var12.EXPLICIT_CONTENT;
                    if(!(var13 !== var12)) { _fun0001_ip = 32; continue _fun0001 }
case 33:
                    var13 = _closure1_slot1;
                    var21 = _closure1_slot2;
                    var12 = 26;
                    var12 = var21[var12];
                    var14 = var13.bind(var5)(var12);
                    var13 = var14.show;
                    var12 = {};
                    var20 = _closure1_slot0;
                    var15 = 27;
                    var18 = var21[var15];
                    var18 = var20.bind(var5)(var18);
                    var19 = var18.intl;
                    var18 = var19.string;
                    var15 = var21[var15];
                    var15 = var20.bind(var5)(var15);
                    var15 = var15.t;
                    var15 = var15.B3vFdU;
                    var15 = var18.bind(var19)(var15);
                    var12['title'] = var15;
                    var18 = var10;
                    var15 = var18.getAnyErrorMessage;
                    var15 = var15.bind(var18)();
                    var16 = var15;
                    if(!(var17 == var15)) { _fun0001_ip = 34; continue _fun0001 }
case 35:
                    var15 = var10;
                    var15 = var15.message;
                    _fun0001_ip = 36; continue _fun0001;
case 34:
                    var15 = var16;
case 36:
                    var12['body'] = var15;
                    var12 = var13.bind(var14)(var12);
                    _fun0001_ip = 30; continue _fun0001;
case 32:
                    var13 = _closure1_slot1;
                    var16 = _closure1_slot2;
                    var12 = 24;
                    var12 = var16[var12];
                    var14 = var13.bind(var5)(var12);
                    var13 = var14.sendExplicitMediaClydeError;
                    var12 = var11;
                    var11 = var10.attachments;
                    var15 = _closure1_slot0;
                    var10 = 25;
                    var10 = var16[var10];
                    var10 = var15.bind(var5)(var10);
                    var10 = var10.TrackMediaRedactionContext;
                    var10 = var10.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED;
                    var10 = var13.bind(var14)(var12, var11, var10);
case 30:
                    return var5;
case 24:
                    return var9;
case 37: // catch_target1
                    CatchBlockStart(arg_register=8);
                    var10 = var4;
                    var9 = false;
                    var9 = var10.bind(var5)(var9);
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var9 = 15;
                    var9 = var11[var9];
                    var10 = var10.bind(var5)(var9);
                    var9 = var10.hideActionSheet;
                    var9 = var9.bind(var10)();
                    var9 = undefined;
                    return var9;
case 16:
                    return var6;
case 38: // catch_target0
                    CatchBlockStart(arg_register=5);
                    var9 = var4;
                    var4 = false;
                    var4 = var9.bind(var5)(var4);
                    var10 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var4 = 15;
                    var4 = var9[var4];
                    var10 = var10.bind(var5)(var4);
                    var4 = var10.hideActionSheet;
                    var4 = var4.bind(var10)();
                    var4 = _closure1_slot0;
                    var3 = 20;
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
case 6:
                    return var2;
case 2:
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
    var4 = metroImportAll;
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
    var14 = var14.BORDER_SUBTLE;
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
    var4 = 36;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forums/native/AddMediaToOriginalForumPostActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AddMediaToOriginalForumPostActionSheet(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var15 = var1.threadId;
            var _closure2_slot0 = var15;
            var3 = var1.attachments;
            var _closure2_slot1 = var3;
            var1 = var1.sendMessage;
            var _closure2_slot2 = var1;
            var2 = _closure1_slot15;
            var4 = undefined;
            var13 = var2.bind(var4)();
            var10 = _closure1_slot5;
            var6 = var10.useState;
            var2 = false;
            var2 = var6.bind(var10)(var2);
            var9 = _closure1_slot3;
            var7 = 2;
            var6 = var9.bind(var4)(var2, var7);
            var2 = 0;
            var11 = var6[var2];
            var8 = 1;
            var6 = var6[var8];
            var _closure2_slot3 = var6;
            var14 = _closure1_slot0;
            var16 = _closure1_slot2;
            var6 = 28;
            var17 = var16[var6];
            var21 = var14.bind(var4)(var17);
            var20 = var21.useStateFromStores;
            var17 = _closure1_slot7;
            var19 = new Array(1);
            var19[0] = var17;
            var18 = new Array(1);
            var18[0] = var15;
            var17 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var19 = var20.bind(var21)(var19, var17, var18);
            var _closure2_slot4 = var19;
            var17 = var16[var6];
            var22 = var14.bind(var4)(var17);
            var21 = var22.useStateFromStores;
            var17 = _closure1_slot9;
            var20 = new Array(1);
            var20[0] = var17;
            var18 = new Array(1);
            var18[0] = var19;
            var17 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure1_slot9;
                    var2 = var3.getGuild;
                    var5 = _closure2_slot4;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0004_ip = 39; continue _fun0004 }
case 40:
                    var5 = _closure2_slot4;
                    var4 = var5.getGuildId;
                    var1 = var4.bind(var5)();
case 39:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var18 = var21.bind(var22)(var20, var17, var18);
            var _closure2_slot5 = var18;
            var6 = var16[var6];
            var21 = var14.bind(var4)(var6);
            var20 = var21.useStateFromStores;
            var6 = _closure1_slot10;
            var17 = new Array(1);
            var17[0] = var6;
            var14 = new Array(1);
            var14[0] = var15;
            var6 = function() {
                var4 = _closure1_slot10;
                var3 = var4.getMessage;
                var2 = _closure2_slot0;
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 18;
                var5 = var5[var1];
                var1 = undefined;
                var5 = var6.bind(var1)(var5);
                var1 = var5.castChannelIdAsMessageId;
                var1 = var1.bind(var5)(var2);
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var17 = var20.bind(var21)(var17, var6, var14);
            var _closure2_slot6 = var17;
            var14 = _closure1_slot1;
            var6 = 29;
            var6 = var16[var6];
            var6 = var14.bind(var4)(var6);
            var6 = var6.bind(var4)();
            var6 = var6.analyticsLocations;
            var _closure2_slot7 = var6;
            var16 = var10.useCallback;
            var14 = new Array(6);
            var14[0] = var19;
            var14[1] = var18;
            var14[2] = var17;
            var14[3] = var15;
            var14[4] = var3;
            var14[5] = var6;
            var6 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                    var2 = _closure2_slot6;
                    if(!(var3 != var2)) { _fun0005_ip = 41; continue _fun0005 }
case 43:
                    var2 = _closure2_slot5;
                    if(!(var3 == var2)) { _fun0005_ip = 44; continue _fun0005 }
case 41:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 15;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    _fun0005_ip = 45; continue _fun0005;
case 44:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 30;
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
case 45:
                    var1 = undefined;
                    return var1;
                }
            };
            var20 = var16.bind(var10)(var6, var14);
            var14 = var10.useCallback;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = function() {
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 30;
                var3 = var4[var1];
                var1 = undefined;
                var6 = var5.bind(var1)(var3);
                var5 = var6.trackForumAddMediaToOriginalPostClicked;
                var3 = {};
                var7 = false;
                var3['added'] = var7;
                var3 = var5.bind(var6)(var3);
                var3 = _closure1_slot1;
                var2 = 15;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideActionSheet;
                var2 = var2.bind(var3)();
                var2 = _closure2_slot2;
                var2 = var2.bind(var1)();
                return var1;
            };
            var19 = var14.bind(var10)(var1, var6);
            var6 = var10.useState;
            var1 = null;
            var6 = var6.bind(var10)(var1);
            var6 = var9.bind(var4)(var6, var7);
            var7 = var6[var2];
            var6 = var6[var8];
            var _closure2_slot8 = var6;
            var9 = var10.useEffect;
            var8 = new Array(1);
            var8[0] = var3;
            var6 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var4 = 0;
                    var3 = var2[var4];
                    var2 = null;
                    if(!(var2 != var3)) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 31;
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
case 46:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var9.bind(var10)(var6, var8);
            var8 = var3[var2];
            var9 = var1 == var8;
            var6 = undefined;
            if(var9) { _fun0003_ip = 48; continue _fun0003 }
case 49:
            var6 = var8.item;
case 48:
            var8 = var1 != var6;
            var14 = undefined;
            if(!var8) { _fun0003_ip = 50; continue _fun0003 }
case 22:
            var1 = var1 != var7;
            var14 = undefined;
            if(!var1) { _fun0003_ip = 50; continue _fun0003 }
case 51:
            var1 = {};
            var1['src'] = var7;
            var7 = var6.width;
            var1['width'] = var7;
            var6 = var6.height;
            var1['height'] = var6;
            var6 = var3[var2];
            var6 = var6.spoiler;
            var1['spoiler'] = var6;
            var2 = var3[var2];
            var2 = var2.description;
            var1['alt'] = var2;
            var14 = var1;
case 50:
            var3 = _closure1_slot13;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var1 = 32;
            var1 = var18[var1];
            var1 = var17.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {};
            var6 = true;
            var1['startExpanded'] = var6;
            var7 = _closure1_slot14;
            var6 = _closure1_slot6;
            var5 = {};
            var8 = var13.container;
            var5['style'] = var8;
            var8 = {};
            var9 = 'none';
            var8['pointerEvents'] = var9;
            var9 = var13.post;
            var8['style'] = var9;
            var9 = 33;
            var9 = var18[var9];
            var9 = var17.bind(var4)(var9);
            var10 = var9.ForumPostListDisabled;
            var9 = {};
            var9['threadId'] = var15;
            var9['localDeviceMedia'] = var14;
            var14 = var13.postContent;
            var9['style'] = var14;
            var9 = var3.bind(var4)(var10, var9);
            var8['children'] = var9;
            var9 = var3.bind(var4)(var6, var8);
            var8 = new Array(6);
            var8[0] = var9;
            var9 = 34;
            var10 = var18[var9];
            var10 = var17.bind(var4)(var10);
            var15 = var10.Text;
            var10 = {'style': null, 'accessibilityRole': 'header', 'variant': 'heading-xl/extrabold', 'color': 'mobile-text-heading-primary'};
            var14 = var13.title;
            var10['style'] = var14;
            var14 = 27;
            var16 = var18[var14];
            var16 = var17.bind(var4)(var16);
            var22 = var16.intl;
            var21 = var22.string;
            var16 = var18[var14];
            var16 = var17.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16["+SZF6S"];
            var16 = var21.bind(var22)(var16);
            var10['children'] = var16;
            var10 = var3.bind(var4)(var15, var10);
            var8[1] = var10;
            var9 = var18[var9];
            var9 = var17.bind(var4)(var9);
            var10 = var9.Text;
            var9 = {'style': null, 'variant': 'text-md/medium', 'color': 'text-default'};
            var15 = var13.description;
            var9['style'] = var15;
            var15 = var18[var14];
            var15 = var17.bind(var4)(var15);
            var21 = var15.intl;
            var16 = var21.string;
            var15 = var18[var14];
            var15 = var17.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15["0Ycgw5"];
            var15 = var16.bind(var21)(var15);
            var9['children'] = var15;
            var9 = var3.bind(var4)(var10, var9);
            var8[2] = var9;
            var10 = {};
            var9 = var13.buttonMargin;
            var10['style'] = var9;
            var9 = 35;
            var15 = var18[var9];
            var15 = var17.bind(var4)(var15);
            var16 = var15.BaseTextButton;
            var15 = {'grow': true, 'variant': 'primary'};
            var21 = var18[var14];
            var21 = var17.bind(var4)(var21);
            var23 = var21.intl;
            var22 = var23.string;
            var21 = var18[var14];
            var21 = var17.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.d611xH;
            var21 = var22.bind(var23)(var21);
            var15['text'] = var21;
            var21 = var13.button;
            var15['pillStyle'] = var21;
            var15['onPress'] = var20;
            var15['loading'] = var11;
            var15['disabled'] = var11;
            var15 = var3.bind(var4)(var16, var15);
            var10['children'] = var15;
            var10 = var3.bind(var4)(var6, var10);
            var8[3] = var10;
            var10 = {};
            var15 = var13.buttonMargin;
            var10['style'] = var15;
            var15 = var18[var9];
            var15 = var17.bind(var4)(var15);
            var16 = var15.BaseTextButton;
            var15 = {'grow': true, 'variant': 'secondary'};
            var20 = var18[var14];
            var20 = var17.bind(var4)(var20);
            var22 = var20.intl;
            var21 = var22.string;
            var20 = var18[var14];
            var20 = var17.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20["8rKVHL"];
            var20 = var21.bind(var22)(var20);
            var15['text'] = var20;
            var20 = var13.button;
            var15['pillStyle'] = var20;
            var15['onPress'] = var19;
            var15['disabled'] = var11;
            var15 = var3.bind(var4)(var16, var15);
            var10['children'] = var15;
            var10 = var3.bind(var4)(var6, var10);
            var8[4] = var10;
            var9 = var18[var9];
            var9 = var17.bind(var4)(var9);
            var10 = var9.BaseTextButton;
            var9 = {'grow': true, 'variant': 'secondary'};
            var15 = var18[var14];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.ETE/oC;
            var14 = var15.bind(var16)(var14);
            var9['text'] = var14;
            var13 = var13.button;
            var9['pillStyle'] = var13;
            var12 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 15;
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