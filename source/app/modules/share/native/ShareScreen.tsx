// app/modules/share/native/ShareScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var11 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var11;
        var _closure1_slot2 = var6;
        var1 = function getAttachmentsRestriction(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var5 = arg1;
                var1 = _closure1_slot8;
                var1 = var5 instanceof var1;
                if(!var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var2 = _closure1_slot9;
                var1 = var5.type;
                var7 = undefined;
                var1 = var2.bind(var7)(var1);
                if(var1) { _fun0002_ip = 4; continue _fun0002 }
case 2:
                var1 = undefined;
                return var1;
case 4:
                var4 = _closure1_slot11;
                var2 = var4.can;
                var1 = _closure1_slot13;
                var1 = var1.ATTACH_FILES;
                var2 = var2.bind(var4)(var1, var5);
                var1 = undefined;
                if(var2) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                var2 = {};
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 14;
                var4 = var8[var3];
                var4 = var6.bind(var7)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var8[var3];
                var3 = var6.bind(var7)(var3);
                var3 = var3.t;
                var3 = var3.P7yvbm;
                var3 = var4.bind(var5)(var3);
                var2['label'] = var3;
                var1 = var2;
case 5:
                return var1;
            }
        };
        var _closure1_slot21 = var1;
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
        var4 = var11.bind(var1)(var4);
        var _closure1_slot3 = var4;
        var12 = 1;
        var4 = var6[var12];
        var4 = var11.bind(var1)(var4);
        var _closure1_slot4 = var4;
        var4 = 2;
        var7 = var6[var4];
        var4 = metroImportAll;
        var4 = var4.bind(var1)(var7);
        var _closure1_slot5 = var4;
        var4 = 3;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.NativeModules;
        var _closure1_slot6 = var7;
        var4 = var4.View;
        var _closure1_slot7 = var4;
        var4 = 4;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.ChannelRecordBase;
        var _closure1_slot8 = var7;
        var4 = var4.isGuildChannelType;
        var _closure1_slot9 = var4;
        var4 = 5;
        var4 = var6[var4];
        var4 = var11.bind(var1)(var4);
        var _closure1_slot10 = var4;
        var4 = 6;
        var4 = var6[var4];
        var4 = var11.bind(var1)(var4);
        var _closure1_slot11 = var4;
        var4 = 7;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.AnalyticEvents;
        var _closure1_slot12 = var7;
        var7 = var4.Permissions;
        var _closure1_slot13 = var7;
        var4 = var4.MAX_UPLOAD_COUNT;
        var _closure1_slot14 = var4;
        var4 = 8;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.MAX_DESTINATION_COUNT;
        var _closure1_slot15 = var4;
        var4 = 9;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.UserRowModes;
        var _closure1_slot16 = var4;
        var4 = 10;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.jsx;
        var _closure1_slot17 = var7;
        var7 = var4.Fragment;
        var _closure1_slot18 = var7;
        var4 = var4.jsxs;
        var _closure1_slot19 = var4;
        var4 = 11;
        var4 = var6[var4];
        var8 = var5.bind(var1)(var4);
        var7 = var8.createStyles;
        var4 = {};
        var9 = {};
        var13 = 'center';
        var9['textAlign'] = var13;
        var4['title'] = var9;
        var9 = {};
        var9['flex'] = var12;
        var4['content'] = var9;
        var9 = {};
        var12 = 12;
        var13 = var6[var12];
        var14 = var5.bind(var1)(var13);
        var13 = var14.isIOS;
        var14 = var13.bind(var14)();
        var13 = 0;
        if(!var14) { _fun0001_ip = 7; continue _fun0001 }
case 8:
        var14 = 13;
        var14 = var6[var14];
        var14 = var11.bind(var1)(var14);
        var14 = var14.spacing;
        var13 = var14.PX_16;
case 7:
        var9['paddingHorizontal'] = var13;
        var12 = var6[var12];
        var13 = var5.bind(var1)(var12);
        var12 = var13.isIOS;
        var12 = var12.bind(var13)();
        var10 = 0;
        if(!var12) { _fun0001_ip = 9; continue _fun0001 }
case 10:
        var12 = 13;
        var12 = var6[var12];
        var12 = var11.bind(var1)(var12);
        var12 = var12.spacing;
        var10 = var12.PX_8;
case 9:
        var9['paddingVertical'] = var10;
        var10 = 13;
        var10 = var6[var10];
        var10 = var11.bind(var1)(var10);
        var10 = var10.colors;
        var10 = var10.BG_BASE_SECONDARY;
        var9['backgroundColor'] = var10;
        var4['headerContainer'] = var9;
        var9 = {'borderBottomWidth': 0, 'shadowColor': 'transparent', 'backgroundColor': 'transparent'};
        var4['header'] = var9;
        var4 = var7.bind(var8)(var4);
        var _closure1_slot20 = var4;
        var4 = 34;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/share/native/ShareScreen.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function ShareScreen(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = arg1;
                var23 = var1.sharedContent;
                var _closure2_slot0 = var23;
                var28 = var1.onClose;
                var _closure2_slot1 = var28;
                var4 = undefined;
                var _closure2_slot8 = var4;
                var _closure2_slot9 = var4;
                var _closure2_slot10 = var4;
                var _closure2_slot11 = var4;
                var1 = _closure1_slot20;
                var9 = var1.bind(var4)();
                var3 = _closure1_slot5;
                var5 = var3.useMemo;
                var2 = new Array(1);
                var2[0] = var23;
                var1 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var4 = _closure2_slot0;
                        var1 = new Array(0);
                        var2 = var4.targetUserId;
                        var3 = null;
                        if(!(var3 != var2)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                        var5 = var1.push;
                        var2 = {};
                        var6 = 'user';
                        var2['type'] = var6;
                        var6 = var4.targetUserId;
                        var2['id'] = var6;
                        var2 = var5.bind(var1)(var2);
case 11:
                        var2 = var4.targetChannelId;
                        if(!(var3 != var2)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                        var3 = var1.push;
                        var2 = {};
                        var5 = 'channel';
                        var2['type'] = var5;
                        var4 = var4.targetChannelId;
                        var2['id'] = var4;
                        var2 = var3.bind(var1)(var2);
case 13:
                        return var1;
                    }
                };
                var2 = var5.bind(var3)(var1, var2);
                var1 = var3.useState;
                var1 = var1.bind(var3)(var2);
                var6 = _closure1_slot4;
                var5 = 2;
                var1 = var6.bind(var4)(var1, var5);
                var17 = 0;
                var25 = var1[var17];
                var _closure2_slot2 = var25;
                var2 = 1;
                var1 = var1[var2];
                var _closure2_slot3 = var1;
                var16 = var25.length;
                var _closure2_slot4 = var16;
                var1 = var23.attachments;
                var7 = var1.length;
                var1 = _closure1_slot14;
                var13 = var7 > var1;
                var _closure2_slot5 = var13;
                var8 = var3.useCallback;
                var7 = function(arg1) {
                    var3 = _closure2_slot3;
                    var1 = undefined;
                    var2 = arg1;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1 = new Array(0);
                var24 = var8.bind(var3)(var7, var1);
                var7 = var3.useState;
                var1 = false;
                var1 = var7.bind(var3)(var1);
                var1 = var6.bind(var4)(var1, var5);
                var15 = var1[var17];
                var1 = var1[var2];
                var _closure2_slot6 = var1;
                var1 = var3.useRef;
                var1 = var1.bind(var3)(var15);
                var _closure2_slot7 = var1;
                if(!(!(var16 <= var2))) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 14;
                var6 = var8[var1];
                var6 = var3.bind(var4)(var6);
                var7 = var6.intl;
                var6 = var7.formatToPlainString;
                var1 = var8[var1];
                var1 = var3.bind(var4)(var1);
                var1 = var1.t;
                var3 = var1.jWtYUl;
                var1 = {};
                var1['count'] = var16;
                var18 = var6.bind(var7)(var3, var1);
                _fun0003_ip = 17; continue _fun0003;
case 15:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 14;
                var3 = var8[var1];
                var3 = var7.bind(var4)(var3);
                var6 = var3.intl;
                var3 = var6.string;
                var1 = var8[var1];
                var1 = var7.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.TXNS7e;
                var18 = var3.bind(var6)(var1);
case 17:
                var6 = _closure1_slot5;
                var3 = var6.useState;
                var7 = var23.text;
                var1 = null;
                var8 = var1 != var7;
                var1 = '';
                if(!var8) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                var1 = var7;
case 18:
                var3 = var3.bind(var6)(var1);
                var1 = _closure1_slot4;
                var1 = var1.bind(var4)(var3, var5);
                var21 = var1[var17];
                _closure2_slot8 = var21;
                var20 = var1[var2];
                var2 = _closure1_slot1;
                var26 = _closure1_slot2;
                var1 = 15;
                var1 = var26[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.bind(var4)(var21);
                var7 = var1.embed;
                _closure2_slot9 = var7;
                var1 = var1.isLoading;
                _closure2_slot10 = var1;
                var5 = _closure1_slot5;
                var8 = var5.useCallback;
                var6 = _closure1_slot3;
                var3 = function* () {
                    var1 = function* anon_0_() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                            var2 = undefined;
                            var7 = undefined;
                            var _closure4_slot0 = var2;
                            var _closure4_slot1 = var2;
                            var _closure4_slot2 = var2;
                            var8 = undefined;
                            var3 = _closure2_slot7;
                            var3 = var3.current;
                            if(var3) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                            var3 = _closure2_slot7;
                            var5 = true;
                            var3['current'] = var5;
                            var3 = _closure2_slot6;
                            var3 = var3.bind(var2)(var5);
case 24: // try_start_0
                            var3 = global;
                            var9 = var3.Promise;
                            var6 = var9.all;
                            var12 = _closure2_slot2;
                            var11 = var12.map;
                            var13 = _closure1_slot0;
                            var14 = _closure1_slot2;
                            var3 = 16;
                            var3 = var14[var3];
                            var3 = var13.bind(var2)(var3);
                            var3 = var3.getOrResolveChannelIdFromDestinationId;
                            var3 = var11.bind(var12)(var3);
                            var3 = var6.bind(var9)(var3);
                            SaveGenerator(address=135);
case 25:
                            return var3;
case 5:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                            if(var6) { _fun0005_ip = 26; continue _fun0005 }
case 27:
                            var9 = var3.filter;
                            var11 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var6 = 17;
                            var6 = var12[var6];
                            var6 = var11.bind(var2)(var6);
                            var6 = var6.isNotNullish;
                            var6 = var9.bind(var3)(var6);
                            var7 = var6;
                            var6 = var6.length;
                            var9 = 0;
                            if(!(var9 !== var6)) { _fun0005_ip = 28; continue _fun0005 }
case 29:
                            var6 = _closure2_slot0;
                            var12 = var6.attachments;
                            _closure4_slot0 = var12;
                            var11 = var12.map;
                            var6 = function(arg1) {
                                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                                    var1 = arg1;
                                    var2 = var1.mimeType;
                                    var1 = null;
                                    var3 = var1 != var2;
                                    var1 = 'unknown';
                                    if(!var3) { _fun0006_ip = 30; continue _fun0006 }
case 31:
                                    var1 = var2;
case 30:
                                    return var1;
                                }
                            };
                            var6 = var11.bind(var12)(var6);
                            _closure4_slot1 = var6;
                            var11 = _closure1_slot1;
                            var12 = _closure1_slot2;
                            var6 = 19;
                            var6 = var12[var6];
                            var11 = var11.bind(var2)(var6);
                            var13 = var7;
                            var12 = var13.map;
                            var6 = function() {
                                var4 = _closure1_slot3;
                                var3 = undefined;
                                var2 = function* (arg1) {
                                    var1 = function* anon_0_(arg1) {
                                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                            if(var2) { _fun0007_ip = 32; continue _fun0007 }
case 33:
                                            var5 = _closure1_slot10;
                                            var3 = var5.getChannel;
                                            var2 = arg1;
                                            var9 = var3.bind(var5)(var2);
                                            var2 = null;
                                            if(!(var2 != var9)) { _fun0007_ip = 34; continue _fun0007 }
case 35:
                                            var5 = _closure1_slot0;
                                            var3 = _closure1_slot2;
                                            var2 = 18;
                                            var2 = var3[var2];
                                            var3 = undefined;
                                            var6 = var5.bind(var3)(var2);
                                            var5 = var6.sendShareMessage;
                                            var2 = {};
                                            var7 = _closure4_slot0;
                                            var2['attachments'] = var7;
                                            var2['channel'] = var9;
                                            var7 = _closure2_slot8;
                                            var2['comment'] = var7;
                                            var2 = var5.bind(var6)(var2);
                                            SaveGenerator(address=106);
case 36:
                                            return var2;
case 37:
                                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                            if(var5) { _fun0007_ip = 38; continue _fun0007 }
case 39:
                                            var6 = _closure1_slot1;
                                            var7 = _closure1_slot2;
                                            var5 = 20;
                                            var5 = var7[var5];
                                            var7 = var6.bind(var3)(var5);
                                            var6 = var7.track;
                                            var4 = _closure1_slot12;
                                            var5 = var4.SHARE_MESSAGE_SENT;
                                            var4 = {};
                                            var10 = var9.guild_id;
                                            var4['guild_id'] = var10;
                                            var10 = var9.id;
                                            var4['channel_id'] = var10;
                                            var9 = var9.type;
                                            var4['channel_type'] = var9;
                                            var9 = _closure4_slot0;
                                            var9 = var9.length;
                                            var4['num_attachments'] = var9;
                                            var8 = _closure4_slot1;
                                            var4['attachment_mimetypes'] = var8;
                                            var4 = var6.bind(var7)(var5, var4);
                                            return var3;
case 38:
                                            return var2;
case 34:
                                            var2 = false;
                                            return var2;
case 32:
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
                            var6 = var6.bind(var2)();
                            var6 = var12.bind(var13)(var6);
                            var6 = var11.bind(var2)(var6);
                            SaveGenerator(address=285);
case 40:
                            return var6;
case 41:
                            ResumeGenerator(result_out_reg=5, return_bool_out_reg=10);
                            if(var11) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                            _closure4_slot2 = var6;
                            var12 = var6.every;
                            var11 = function(arg1) {
                                var1 = arg1;
                                var2 = var1.status;
                                var1 = 'fulfilled';
                                var1 = var1 === var2;
                                return var1;
                            };
                            var11 = var12.bind(var6)(var11);
                            if(var11) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                            var13 = _closure2_slot2;
                            var12 = var13.filter;
                            var11 = function(arg1, arg2) {
                                var2 = _closure4_slot2;
                                var1 = arg2;
                                var1 = var2[var1];
                                var2 = var1.status;
                                var1 = 'rejected';
                                var1 = var1 === var2;
                                return var1;
                            };
                            var15 = var12.bind(var13)(var11);
                            var12 = _closure1_slot5;
                            var11 = var12.lazy;
                            var10 = function() {
                                var3 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var2 = 24;
                                var2 = var1[var2];
                                var4 = undefined;
                                var3 = var3.bind(var4)(var2);
                                var2 = 23;
                                var2 = var1[var2];
                                var1 = var1.paths;
                                var1 = var3.bind(var4)(var2, var1);
                                return var1;
                            };
                            var14 = var11.bind(var12)(var10);
                            var17 = _closure1_slot0;
                            var20 = _closure1_slot2;
                            var10 = 25;
                            var10 = var20[var10];
                            var13 = var17.bind(var2)(var10);
                            var12 = var13.openAlert;
                            var11 = _closure1_slot17;
                            var10 = {};
                            var16 = 14;
                            var18 = var20[var16];
                            var18 = var17.bind(var2)(var18);
                            var21 = var18.intl;
                            var19 = var21.string;
                            var18 = var20[var16];
                            var18 = var17.bind(var2)(var18);
                            var18 = var18.t;
                            var18 = var18.dA1gb2;
                            var18 = var19.bind(var21)(var18);
                            var10['title'] = var18;
                            var18 = var20[var16];
                            var18 = var17.bind(var2)(var18);
                            var19 = var18.intl;
                            var18 = var19.formatToPlainString;
                            var16 = var20[var16];
                            var16 = var17.bind(var2)(var16);
                            var16 = var16.t;
                            var17 = var16.thm88P;
                            var16 = {};
                            var20 = var15.length;
                            var16['count'] = var20;
                            var16 = var18.bind(var19)(var17, var16);
                            var10['content'] = var16;
                            var10['failedDestinations'] = var15;
                            var11 = var11.bind(var2)(var14, var10);
                            var10 = 'share-failed-alert-modal';
                            var10 = var12.bind(var13)(var10, var11);
case 46: // try_end0
                            var10 = _closure2_slot6;
                            var11 = false;
                            var10 = var10.bind(var2)(var11);
                            var10 = _closure2_slot7;
                            var10['current'] = var11;
                            _fun0005_ip = 22; continue _fun0005;
case 44: // try_start_1
                            var11 = var7[var9];
                            var8 = var11;
                            var9 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var7 = 21;
                            var7 = var10[var7];
                            var10 = var9.bind(var2)(var7);
                            var9 = var10.fetchMessages;
                            var7 = {};
                            var7['channelId'] = var11;
                            var7 = var9.bind(var10)(var7);
                            SaveGenerator(address=610);
case 47:
                            return var7;
case 48:
                            ResumeGenerator(result_out_reg=6, return_bool_out_reg=8);
                            if(var9) { _fun0005_ip = 49; continue _fun0005 }
case 50:
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var11 = 22;
                            var11 = var10[var11];
                            var13 = var9.bind(var2)(var11);
                            var12 = var13.transitionToChannel;
                            var11 = var8;
                            var8 = {'navigationReplace': true, 'openTextInVoiceIfVoiceChannel': true};
                            var8 = var12.bind(var13)(var11, var8);
                            var8 = 12;
                            var8 = var10[var8];
                            var9 = var9.bind(var2)(var8);
                            var8 = var9.isAndroid;
                            var8 = var8.bind(var9)();
                            if(!var8) { _fun0005_ip = 51; continue _fun0005 }
case 52:
                            var8 = _closure1_slot6;
                            var9 = var8.ShareManager;
                            var8 = var9.launchApp;
                            var8 = var8.bind(var9)();
case 51:
                            var8 = _closure2_slot1;
                            var8 = var8.bind(var2)();
case 53: // try_end1
                            var9 = _closure2_slot6;
                            var10 = false;
                            var9 = var9.bind(var2)(var10);
                            var9 = _closure2_slot7;
                            var9['current'] = var10;
                            var8 = undefined;
                            return var8;
case 49:
                            var8 = _closure2_slot6;
                            var9 = false;
                            var8 = var8.bind(var2)(var9);
                            var8 = _closure2_slot7;
                            var8['current'] = var9;
                            return var7;
case 42:
                            var7 = _closure2_slot6;
                            var8 = false;
                            var7 = var7.bind(var2)(var8);
                            var7 = _closure2_slot7;
                            var7['current'] = var8;
                            return var6;
case 28: // try_start_2
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var5 = 18;
                            var5 = var11[var5];
                            var7 = var10.bind(var2)(var5);
                            var6 = var7.showInformationToast;
                            var5 = 14;
                            var8 = var11[var5];
                            var8 = var10.bind(var2)(var8);
                            var9 = var8.intl;
                            var8 = var9.string;
                            var5 = var11[var5];
                            var5 = var10.bind(var2)(var5);
                            var5 = var5.t;
                            var5 = var5.wFcUiI;
                            var5 = var8.bind(var9)(var5);
                            var5 = var6.bind(var7)(var5);
case 54: // try_end2
                            var6 = _closure2_slot6;
                            var7 = false;
                            var6 = var6.bind(var2)(var7);
                            var6 = _closure2_slot7;
                            var6['current'] = var7;
                            var5 = undefined;
                            return var5;
case 26:
                            var5 = _closure2_slot6;
                            var6 = false;
                            var5 = var5.bind(var2)(var6);
                            var5 = _closure2_slot7;
                            var5['current'] = var6;
                            return var3;
case 55: // catch_target0 // catch_target1 // catch_target2
                            CatchBlockStart(arg_register=2);
                            var6 = _closure2_slot6;
                            var5 = false;
                            var6 = var6.bind(var2)(var5);
                            var4 = _closure2_slot7;
                            var4['current'] = var5;
                            throw var3;
case 22:
                            return var2;
case 20:
                            return var1;
                        }
                    };
                    return var1;
                };
                var6 = var6.bind(var4)(var3);
                var3 = new Array(4);
                var3[0] = var28;
                var3[1] = var25;
                var12 = var23.attachments;
                var3[2] = var12;
                var3[3] = var21;
                var14 = var8.bind(var5)(var6, var3);
                var6 = var5.useMemo;
                var3 = new Array(3);
                var3[0] = var7;
                var3[1] = var1;
                var1 = var23.attachments;
                var3[2] = var1;
                var1 = function() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var1 = _closure2_slot9;
                        var13 = null;
                        if(!(var13 == var1)) { _fun0008_ip = 35; continue _fun0008 }
case 56:
                        var1 = _closure2_slot0;
                        var1 = var1.attachments;
                        var3 = var1.length;
                        var2 = 0;
                        var1 = null;
                        if(!(var2 !== var3)) { _fun0008_ip = 57; continue _fun0008 }
case 35:
                        var5 = _closure1_slot19;
                        var4 = _closure1_slot18;
                        var3 = {};
                        var9 = _closure1_slot17;
                        var8 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var2 = 26;
                        var6 = var12[var2];
                        var2 = undefined;
                        var7 = var8.bind(var2)(var6);
                        var6 = {};
                        var10 = _closure2_slot0;
                        var10 = var10.attachments;
                        var6['attachments'] = var10;
                        var10 = true;
                        var6['isRevamp'] = var10;
                        var7 = var9.bind(var2)(var7, var6);
                        var6 = new Array(2);
                        var6[0] = var7;
                        var7 = 27;
                        var7 = var12[var7];
                        var8 = var8.bind(var2)(var7);
                        var7 = {};
                        var12 = _closure2_slot9;
                        var13 = var13 == var12;
                        var12 = undefined;
                        if(var13) { _fun0008_ip = 58; continue _fun0008 }
case 59:
                        var13 = _closure2_slot9;
                        var12 = var13.embed;
case 58:
                        var7['embed'] = var12;
                        var11 = _closure2_slot10;
                        var7['isLoadingEmbed'] = var11;
                        var7['isRevamp'] = var10;
                        var7 = var9.bind(var2)(var8, var7);
                        var6[1] = var7;
                        var3['children'] = var6;
                        var1 = var5.bind(var2)(var4, var3);
case 57:
                        return var1;
                    }
                };
                var19 = var6.bind(var5)(var1, var3);
                var1 = 28;
                var1 = var26[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var22 = true;
                var1['ignoreKeyboard'] = var22;
                var1 = var2.bind(var4)(var1);
                var1 = var1.height;
                _closure2_slot11 = var1;
                var3 = var5.useMemo;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 12;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.isAndroid;
                        var1 = var1.bind(var2)();
                        var2 = {};
                        if(var1) { _fun0009_ip = 60; continue _fun0009 }
case 35:
                        var1 = 1;
                        var2['flex'] = var1;
                        var1 = var2;
                        _fun0009_ip = 61; continue _fun0009;
case 60:
                        var3 = _closure2_slot11;
                        var2['height'] = var3;
                        var1 = var2;
case 61:
                        return var1;
                    }
                };
                var5 = var3.bind(var5)(var1, var2);
                var3 = _closure1_slot19;
                var2 = _closure1_slot7;
                var1 = {};
                var1['style'] = var5;
                var6 = _closure1_slot17;
                var5 = {};
                var7 = var9.headerContainer;
                var5['style'] = var7;
                var12 = _closure1_slot0;
                var7 = 29;
                var7 = var26[var7];
                var7 = var12.bind(var4)(var7);
                var8 = var7.Header;
                var7 = {};
                var27 = var9.header;
                var7['headerStyle'] = var27;
                var27 = 14;
                var29 = var26[var27];
                var29 = var12.bind(var4)(var29);
                var30 = var29.intl;
                var29 = var30.string;
                var27 = var26[var27];
                var27 = var12.bind(var4)(var27);
                var27 = var27.t;
                var27 = var27.MR7/kp;
                var27 = var29.bind(var30)(var27);
                var7['title'] = var27;
                var11 = function headerTitle(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var1 = arg1;
                        var6 = var1.children;
                        var3 = _closure2_slot5;
                        if(var3) { _fun0010_ip = 39; continue _fun0010 }
case 62:
                        var3 = _closure2_slot4;
                        var2 = _closure1_slot15;
                        var2 = var3 >= var2;
                        var8 = undefined;
                        var5 = undefined;
                        if(!var2) { _fun0010_ip = 63; continue _fun0010 }
case 64:
                        var3 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var2 = 14;
                        var4 = var9[var2];
                        var4 = var3.bind(var8)(var4);
                        var7 = var4.intl;
                        var4 = var7.formatToPlainString;
                        var2 = var9[var2];
                        var2 = var3.bind(var8)(var2);
                        var2 = var2.t;
                        var3 = var2.3Fbkio;
                        var2 = {};
                        var8 = _closure1_slot15;
                        var2['count'] = var8;
                        var5 = var4.bind(var7)(var3, var2);
                        _fun0010_ip = 63; continue _fun0010;
case 39:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var2 = 14;
                        var4 = var9[var2];
                        var3 = undefined;
                        var4 = var8.bind(var3)(var4);
                        var7 = var4.intl;
                        var4 = var7.formatToPlainString;
                        var2 = var9[var2];
                        var2 = var8.bind(var3)(var2);
                        var2 = var2.t;
                        var3 = var2.qqyp/f;
                        var2 = {};
                        var8 = _closure1_slot14;
                        var2['limit'] = var8;
                        var5 = var4.bind(var7)(var3, var2);
case 63:
                        var4 = _closure1_slot17;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 30;
                        var1 = var3[var1];
                        var3 = undefined;
                        var1 = var2.bind(var3)(var1);
                        var2 = var1.GenericHeaderTitle;
                        var1 = {};
                        var1['title'] = var6;
                        var1['subtitle'] = var5;
                        var5 = 'text-warning';
                        var1['subtitleColor'] = var5;
                        var5 = 'redesign/heading-18/bold';
                        var1['variant'] = var5;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    }
                };
                var7['headerTitle'] = var11;
                var11 = 'center';
                var7['headerTitleAlign'] = var11;
                var11 = 31;
                var11 = var26[var11];
                var27 = var12.bind(var4)(var11);
                var11 = var27.getHeaderCloseButton;
                var11 = var11.bind(var27)(var28);
                var7['headerLeft'] = var11;
                var11 = 12;
                var11 = var26[var11];
                var12 = var12.bind(var4)(var11);
                var11 = var12.isIOS;
                var12 = var11.bind(var12)();
                var11 = undefined;
                if(!var12) { _fun0003_ip = 65; continue _fun0003 }
case 66:
                var11 = 0;
case 65:
                var7['headerStatusBarHeight'] = var11;
                var7 = var6.bind(var4)(var8, var7);
                var5['children'] = var7;
                var6 = var6.bind(var4)(var2, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot19;
                var7 = _closure1_slot7;
                var6 = {};
                var9 = var9.content;
                var6['style'] = var9;
                var12 = _closure1_slot17;
                var11 = _closure1_slot1;
                var26 = _closure1_slot2;
                var9 = 32;
                var9 = var26[var9];
                var11 = var11.bind(var4)(var9);
                var9 = {};
                var26 = _closure1_slot16;
                var26 = var26.TOGGLE;
                var9['rowMode'] = var26;
                var9['initialSelectedDestinations'] = var25;
                var9['onSelectedDestinationChange'] = var24;
                var23 = var23.attachments;
                var23 = var23.length;
                var24 = var23 > var17;
                var23 = undefined;
                if(!var24) { _fun0003_ip = 67; continue _fun0003 }
case 68:
                var23 = _closure1_slot21;
case 67:
                var9['getRowIsUnavailable'] = var23;
                var9['insetEnd'] = var17;
                var9['disableGradient'] = var22;
                var9['disableStickySections'] = var22;
                var22 = _closure1_slot15;
                var22 = var16 >= var22;
                if(var22) { _fun0003_ip = 69; continue _fun0003 }
case 70:
                var22 = var13;
case 69:
                var9['disableSelection'] = var22;
                var11 = var12.bind(var4)(var11, var9);
                var9 = new Array(2);
                var9[0] = var11;
                var12 = _closure1_slot17;
                var11 = _closure1_slot1;
                var22 = _closure1_slot2;
                var10 = 33;
                var10 = var22[var10];
                var11 = var11.bind(var4)(var10);
                var10 = {};
                var10['text'] = var21;
                var10['setText'] = var20;
                var10['preview'] = var19;
                var10['sendLabel'] = var18;
                var16 = var16 > var17;
                if(!var16) { _fun0003_ip = 71; continue _fun0003 }
case 72:
                var16 = !var13;
case 71:
                var10['canSend'] = var16;
                var10['isSending'] = var15;
                var10['onSend'] = var14;
                var10['disabled'] = var13;
                var10 = var12.bind(var4)(var11, var10);
                var9[1] = var10;
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
    }
})();