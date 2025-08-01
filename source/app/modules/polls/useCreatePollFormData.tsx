// app/modules/polls/useCreatePollFormData.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var1 = function createPollCreationImageForMedia(arg1, arg2) {
        var1 = {};
        var2 = {};
        var3 = arg2;
        var2['status'] = var3;
        var3 = arg1;
        var2['mediaURL'] = var3;
        var1['mediaAttachmentState'] = var2;
        var2 = undefined;
        var1['emoji'] = var2;
        var1['stickerId'] = var2;
        return var1;
    };
    var _closure1_slot10 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.MAX_NUMBER_OF_ANSWERS_PER_POLL;
    var _closure1_slot7 = var7;
    var7 = var4.MIN_NUMBER_OF_ANSWERS_PER_POLL;
    var _closure1_slot8 = var7;
    var4 = var4.PollDurations;
    var _closure1_slot9 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/polls/useCreatePollFormData.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useCreatePollCommonData(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var31 = arg1;
            var30 = arg2;
            var35 = arg3;
            var12 = arg4;
            var _closure2_slot0 = var31;
            var _closure2_slot1 = var30;
            var _closure2_slot2 = var35;
            var _closure2_slot3 = var12;
            var7 = var31.id;
            var _closure2_slot4 = var7;
            var4 = _closure1_slot6;
            var3 = var4.useState;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot3;
                    var2 = null;
                    var4 = var2 == var1;
                    var5 = undefined;
                    var1 = undefined;
                    if(var4) { _fun0002_ip = 60; continue _fun0002 }
 20:
                    var3 = _closure2_slot3;
                    var6 = var3.initialAnswers;
                    var3 = var2 == var6;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 60; continue _fun0002 }
 41:
                    var4 = var6.map;
                    var3 = function(arg1) {
                        var1 = {};
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var2 = 4;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var4.bind(var2)(var3);
                        var2 = var3.generateEmptyPollAnswer;
                        var5 = var2.bind(var3)();
                        var6 = var1;
                        var2 = copyDataProperties(var6, var5);
                        var5 = arg1;
                        var6 = var1;
                        var2 = copyDataProperties(var6, var5);
                        return var1;
                    };
                    var1 = var4.bind(var6)(var3);
 60:
                    if(!(var2 == var1)) { _fun0002_ip = 131; continue _fun0002 }
 64:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var3 = 4;
                    var2 = var6[var3];
                    var7 = var4.bind(var5)(var2);
                    var2 = var7.generateEmptyPollAnswer;
                    var7 = var2.bind(var7)();
                    var2 = new Array(2);
                    var2[0] = var7;
                    var3 = var6[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.generateEmptyPollAnswer;
                    var3 = var3.bind(var4)();
                    var2[1] = var3;
                    var1 = var2;
 131:
                    return var1;
                }
            };
            var3 = var3.bind(var4)(var2);
            var2 = _closure1_slot5;
            var34 = undefined;
            var11 = 2;
            var2 = var2.bind(var34)(var3, var11);
            var9 = 0;
            var26 = var2[var9];
            var _closure2_slot5 = var26;
            var5 = 1;
            var2 = var2[var5];
            var _closure2_slot6 = var2;
            var3 = var4.useState;
            var8 = null;
            var2 = var8 == var12;
            var10 = undefined;
            if(var2) { _fun0001_ip = 123; continue _fun0001 }
 115:
            var10 = var12.initialQuestion;
 123:
            var13 = var8 != var10;
            var2 = '';
            if(!var13) { _fun0001_ip = 137; continue _fun0001 }
 134:
            var2 = var10;
 137:
            var2 = var3.bind(var4)(var2);
            var3 = _closure1_slot5;
            var2 = var3.bind(var34)(var2, var11);
            var25 = var2[var9];
            var _closure2_slot7 = var25;
            var24 = var2[var5];
            var _closure2_slot8 = var24;
            var4 = _closure1_slot6;
            var2 = var4.useState;
            var10 = false;
            var2 = var2.bind(var4)(var10);
            var2 = var3.bind(var34)(var2, var11);
            var23 = var2[var9];
            var _closure2_slot9 = var23;
            var22 = var2[var5];
            var3 = var4.useState;
            var13 = var8 == var12;
            var2 = undefined;
            if(var13) { _fun0001_ip = 224; continue _fun0001 }
 216:
            var2 = var12.initialDuration;
 224:
            if(!(var8 == var2)) { _fun0001_ip = 238; continue _fun0001 }
 228:
            var8 = _closure1_slot9;
            var2 = var8.ONE_DAY;
 238:
            var2 = var3.bind(var4)(var2);
            var3 = _closure1_slot5;
            var2 = var3.bind(var34)(var2, var11);
            var21 = var2[var9];
            var _closure2_slot10 = var21;
            var20 = var2[var5];
            var4 = _closure1_slot6;
            var8 = var4.useState;
            var2 = {};
            var2 = var8.bind(var4)(var2);
            var2 = var3.bind(var34)(var2, var11);
            var8 = var2[var9];
            var2 = var2[var5];
            var _closure2_slot11 = var2;
            var2 = var4.useState;
            var2 = var2.bind(var4)(var10);
            var2 = var3.bind(var34)(var2, var11);
            var3 = var2[var9];
            var2 = var2[var5];
            var _closure2_slot12 = var2;
            var10 = var26.filter;
            var4 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.isAnswerFilled;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var33 = var10.bind(var26)(var4);
            var _closure2_slot13 = var33;
            var10 = var26.filter;
            var4 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.isIncompleteAnswer;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var10.bind(var26)(var4);
            var10 = var25.length;
            var19 = var10 > var9;
            if(!var19) { _fun0001_ip = 390; continue _fun0001 }
 377:
            var12 = var33.length;
            var10 = _closure1_slot8;
            var19 = var12 >= var10;
 390:
            if(!var19) { _fun0001_ip = 402; continue _fun0001 }
 393:
            var4 = var4.length;
            var19 = var9 === var4;
 402:
            var12 = _closure1_slot1;
            var13 = _closure1_slot3;
            var4 = 5;
            var4 = var13[var4];
            var10 = var12.bind(var34)(var4);
            var4 = 6;
            var4 = var13[var4];
            var4 = var12.bind(var34)(var4);
            var4 = var4.createPoll;
            var10 = var10.bind(var34)(var4);
            var4 = _closure1_slot5;
            var4 = var4.bind(var34)(var10, var11);
            var32 = var4[var9];
            var _closure2_slot14 = var32;
            var5 = var4[var5];
            var4 = var5.error;
            var5 = var5.loading;
            var _closure2_slot15 = var5;
            var10 = var26.length;
            var9 = _closure1_slot7;
            var18 = var10 < var9;
            var _closure2_slot16 = var18;
            var10 = var26.length;
            var9 = _closure1_slot8;
            var17 = var10 > var9;
            var _closure2_slot17 = var17;
            var28 = _closure1_slot6;
            var11 = var28.useCallback;
            var10 = function(arg1) {
                var4 = _closure2_slot11;
                var1 = undefined;
                var3 = function(arg1) {
                    var1 = {};
                    var3 = arg1;
                    var4 = var1;
                    var2 = copyDataProperties(var4, var3);
                    var2 = delete var1.question;
                    return var1;
                };
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot8;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var9 = new Array(0);
            var16 = var11.bind(var28)(var10, var9);
            var11 = var28.useCallback;
            var10 = function(arg1) {
                var1 = arg1;
                var3 = var1.text;
                var _closure3_slot0 = var3;
                var3 = var1.index;
                var _closure3_slot1 = var3;
                var1 = var1.localCreationAnswerId;
                var _closure3_slot2 = var1;
                var5 = _closure2_slot11;
                var1 = undefined;
                var4 = function(arg1) {
                    var1 = {};
                    var5 = arg1;
                    var6 = var1;
                    var2 = copyDataProperties(var6, var5);
                    var4 = _closure3_slot2;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var3 = var2.concat;
                    var2 = 'answer-';
                    var2 = var3.bind(var2)(var4);
                    var2 = delete var1[var2];
                    return var1;
                };
                var4 = var5.bind(var1)(var4);
                var3 = _closure2_slot6;
                var2 = function(arg1) {
                    var1 = new Array(0);
                    var7 = arg1;
                    var6 = 0;
                    var8 = var1;
                    var2 = arraySpread(var8, var7, var6);
                    var3 = _closure3_slot1;
                    var2 = {};
                    var7 = var1[var3];
                    var8 = var2;
                    var5 = copyDataProperties(var8, var7);
                    var5 = _closure3_slot0;
                    var4 = 'text';
                    var2[var4] = var5;
                    var1[var3] = var2;
                    return var1;
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var9 = new Array(0);
            var15 = var11.bind(var28)(var10, var9);
            var11 = var28.useCallback;
            var10 = function(arg1, arg2) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var1 = arg2;
                var _closure3_slot1 = var1;
                var3 = _closure2_slot6;
                var1 = undefined;
                var2 = function(arg1) {
                    var1 = new Array(0);
                    var7 = arg1;
                    var6 = 0;
                    var8 = var1;
                    var2 = arraySpread(var8, var7, var6);
                    var3 = _closure3_slot1;
                    var2 = {};
                    var7 = var1[var3];
                    var8 = var2;
                    var5 = copyDataProperties(var8, var7);
                    var5 = _closure3_slot0;
                    var4 = 'image';
                    var2[var4] = var5;
                    var1[var3] = var2;
                    return var1;
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var9 = new Array(0);
            var9 = var11.bind(var28)(var10, var9);
            var _closure2_slot18 = var9;
            var12 = var28.useCallback;
            var11 = new Array(1);
            var11[0] = var26;
            var10 = function(arg1, arg2, arg3) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot5;
                    var1 = arg2;
                    var3 = var2[var1];
                    var5 = var3.image;
                    var4 = null;
                    var6 = var4 == var5;
                    var1 = undefined;
                    var2 = undefined;
                    if(var6) { _fun0003_ip = 39; continue _fun0003 }
 33:
                    var2 = var5.mediaAttachmentState;
 39:
                    var4 = var4 != var2;
                    if(!var4) { _fun0003_ip = 59; continue _fun0003 }
 46:
                    var6 = var2.mediaURL;
                    var5 = arg3;
                    var4 = var6 !== var5;
 59:
                    if(!var4) { _fun0003_ip = 147; continue _fun0003 }
 62:
                    var5 = _closure1_slot2;
                    var9 = _closure1_slot3;
                    var4 = 7;
                    var4 = var9[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.removePollUploadAttachment;
                    var4 = var3.localCreationAnswerId;
                    var8 = _closure1_slot0;
                    var7 = 8;
                    var7 = var9[var7];
                    var8 = var8.bind(var1)(var7);
                    var7 = var8.getFileNameFromGifUrl;
                    var3 = var3.localCreationAnswerId;
                    var2 = var2.mediaURL;
                    var3 = var7.bind(var8)(var3, var2);
                    var2 = arg1;
                    var2 = var5.bind(var6)(var2, var4, var3);
 147:
                    return var1;
                }
            };
            var10 = var12.bind(var28)(var10, var11);
            var _closure2_slot19 = var10;
            var13 = var28.useCallback;
            var11 = function() {
                var4 = _closure1_slot4;
                var3 = undefined;
                var2 = function* (arg1, arg2, arg3) {
                    var1 = function* anon_0_(arg1, arg2, arg3) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            StartGenerator();
                            var11 = arg1;
                            var6 = arg2;
                            var8 = arg3;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0004_ip = 254; continue _fun0004 }
 19:
                            var2 = _closure2_slot5;
                            var2 = var2[var6];
                            var9 = var2.localCreationAnswerId;
                            var2 = _closure2_slot19;
                            var3 = undefined;
                            var2 = var2.bind(var3)(var11, var6);
                            var7 = _closure2_slot18;
                            var13 = _closure1_slot10;
                            var14 = _closure1_slot0;
                            var12 = _closure1_slot3;
                            var10 = 9;
                            var2 = var12[var10];
                            var2 = var14.bind(var3)(var2);
                            var2 = var2.PollMediaUploadAttachmentStatus;
                            var2 = var2.PREPARING;
                            var2 = var13.bind(var3)(var8, var2);
                            var2 = var7.bind(var3)(var2, var6);
                            var7 = _closure1_slot2;
                            var2 = 7;
                            var2 = var12[var2];
                            var7 = var7.bind(var3)(var2);
                            var2 = var7.handlePollGifAttachmentAdd;
                            var2 = var2.bind(var7)(var11, var9, var8);
                            SaveGenerator(address=136);
 134:
                            return var2;
 136:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                            if(var7) { _fun0004_ip = 251; continue _fun0004 }
 142:
                            var7 = null;
                            if(!(var7 == var2)) { _fun0004_ip = 199; continue _fun0004 }
 148:
                            var9 = _closure2_slot18;
                            var11 = _closure1_slot10;
                            var12 = _closure1_slot0;
                            var7 = _closure1_slot3;
                            var7 = var7[var10];
                            var7 = var12.bind(var3)(var7);
                            var7 = var7.PollMediaUploadAttachmentStatus;
                            var7 = var7.ERROR;
                            var7 = var11.bind(var3)(var8, var7);
                            var7 = var9.bind(var3)(var7, var6);
                            _fun0004_ip = 248; continue _fun0004;
 199:
                            var5 = _closure2_slot18;
                            var7 = _closure1_slot10;
                            var9 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var4 = var4[var10];
                            var4 = var9.bind(var3)(var4);
                            var4 = var4.PollMediaUploadAttachmentStatus;
                            var4 = var4.READY_TO_UPLOAD;
                            var4 = var7.bind(var3)(var8, var4);
                            var4 = var5.bind(var3)(var4, var6);
 248:
                            return var3;
 251:
                            return var2;
 254:
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
            var12 = var11.bind(var34)();
            var11 = new Array(3);
            var11[0] = var26;
            var11[1] = var9;
            var11[2] = var10;
            var14 = var13.bind(var28)(var12, var11);
            var13 = var28.useCallback;
            var12 = new Array(3);
            var12[0] = var26;
            var12[1] = var9;
            var12[2] = var10;
            var11 = function(arg1, arg2, arg3) {
                var13 = arg1;
                var4 = arg2;
                var12 = arg3;
                var1 = _closure2_slot5;
                var1 = var1[var4];
                var11 = var1.localCreationAnswerId;
                var1 = global;
                var2 = var1.URL;
                var1 = var2.createObjectURL;
                var6 = var1.bind(var2)(var12);
                var2 = _closure2_slot19;
                var1 = undefined;
                var2 = var2.bind(var1)(var13, var4);
                var14 = _closure2_slot18;
                var5 = _closure1_slot10;
                var7 = _closure1_slot0;
                var8 = _closure1_slot3;
                var2 = 9;
                var10 = var8[var2];
                var10 = var7.bind(var1)(var10);
                var10 = var10.PollMediaUploadAttachmentStatus;
                var10 = var10.PREPARING;
                var10 = var5.bind(var1)(var6, var10);
                var10 = var14.bind(var1)(var10, var4);
                var10 = _closure1_slot2;
                var9 = 7;
                var9 = var8[var9];
                var10 = var10.bind(var1)(var9);
                var9 = var10.handlePollMediaAttachmentAdd;
                var9 = var9.bind(var10)(var13, var11, var12);
                var3 = _closure2_slot18;
                var2 = var8[var2];
                var2 = var7.bind(var1)(var2);
                var2 = var2.PollMediaUploadAttachmentStatus;
                var2 = var2.READY_TO_UPLOAD;
                var2 = var5.bind(var1)(var6, var2);
                var2 = var3.bind(var1)(var2, var4);
                return var1;
            };
            var12 = var13.bind(var28)(var11, var12);
            var13 = var28.useCallback;
            var11 = new Array(3);
            var11[0] = var7;
            var11[1] = var9;
            var11[2] = var10;
            var9 = function(arg1, arg2) {
                var4 = arg2;
                var5 = _closure2_slot19;
                var3 = _closure2_slot4;
                var1 = undefined;
                var3 = var5.bind(var1)(var3, var4);
                var3 = _closure2_slot18;
                var2 = {};
                var5 = arg1;
                var2['emoji'] = var5;
                var2['stickerId'] = var1;
                var2['mediaAttachmentState'] = var1;
                var2 = var3.bind(var1)(var2, var4);
                return var1;
            };
            var13 = var13.bind(var28)(var9, var11);
            var27 = var28.useCallback;
            var11 = function(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var3 = _closure2_slot6;
                var1 = undefined;
                var2 = function(arg1) {
                    var1 = new Array(0);
                    var7 = arg1;
                    var6 = 0;
                    var8 = var1;
                    var2 = arraySpread(var8, var7, var6);
                    var3 = _closure3_slot0;
                    var2 = {};
                    var7 = var1[var3];
                    var8 = var2;
                    var4 = copyDataProperties(var8, var7);
                    var5 = undefined;
                    var4 = 'image';
                    var2[var4] = var5;
                    var1[var3] = var2;
                    return var1;
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var9 = new Array(0);
            var9 = var27.bind(var28)(var11, var9);
            var29 = var28.useCallback;
            var27 = new Array(1);
            var27[0] = var18;
            var11 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure2_slot16;
                    if(!var2) { _fun0005_ip = 30; continue _fun0005 }
 10:
                    var3 = _closure2_slot6;
                    var2 = undefined;
                    var1 = function(arg1) {
                        var1 = new Array(1);
                        var7 = arg1;
                        var6 = 0;
                        var8 = var1;
                        var3 = arraySpread(var8, var7, var6);
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var2 = 4;
                        var4 = var4[var2];
                        var2 = undefined;
                        var4 = var5.bind(var2)(var4);
                        var2 = var4.generateEmptyPollAnswer;
                        var2 = var2.bind(var4)();
                        var1[var3] = var2;
                        var2 = 1;
                        var2 = var3 + var2;
                        return var1;
                    };
                    var1 = var3.bind(var2)(var1);
 30:
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = var29.bind(var28)(var11, var27);
            var29 = var28.useCallback;
            var36 = var26.length;
            var27 = new Array(5);
            var27[0] = var36;
            var27[1] = var17;
            var27[2] = var7;
            var27[3] = var35;
            var27[4] = var10;
            var10 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var5 = arg1;
                    var _closure3_slot0 = var5;
                    var3 = _closure2_slot17;
                    if(!var3) { _fun0006_ip = 95; continue _fun0006 }
 19:
                    var3 = _closure2_slot5;
                    var4 = var3.length;
                    var7 = _closure2_slot19;
                    var6 = _closure2_slot4;
                    var3 = undefined;
                    var6 = var7.bind(var3)(var6, var5);
                    var6 = _closure2_slot6;
                    var2 = function(arg1) {
                        var1 = new Array(0);
                        var6 = arg1;
                        var5 = 0;
                        var7 = var1;
                        var2 = arraySpread(var7, var6, var5);
                        var4 = var1.splice;
                        var3 = _closure3_slot0;
                        var2 = 1;
                        var2 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    var2 = var6.bind(var3)(var2);
                    var6 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var6)) { _fun0006_ip = 95; continue _fun0006 }
 70:
                    var2 = _closure2_slot2;
                    var1 = {};
                    var1['indexToRemove'] = var5;
                    var1['numberOfAnswers'] = var4;
                    var1 = var2.bind(var3)(var1);
 95:
                    var1 = undefined;
                    return var1;
                }
            };
            var10 = var29.bind(var28)(var10, var27);
            var29 = var28.useEffect;
            var27 = new Array(1);
            var27[0] = var7;
            var7 = function() {
                var1 = function() {
                    var3 = _closure1_slot2;
                    var2 = _closure1_slot3;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.removeAllPollUploadAttachments;
                    var2 = _closure2_slot4;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                return var1;
            };
            var7 = var29.bind(var28)(var7, var27);
            var29 = var28.useCallback;
            var27 = new Array(2);
            var27[0] = var26;
            var27[1] = var25;
            var7 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var2 = true;
                    var _closure3_slot0 = var2;
                    var5 = {};
                    var _closure3_slot1 = var5;
                    var4 = _closure2_slot7;
                    var3 = var4.trim;
                    var3 = var3.bind(var4)();
                    var3 = var3.length;
                    var6 = 0;
                    if(!(var6 === var3)) { _fun0007_ip = 116; continue _fun0007 }
 42:
                    var3 = false;
                    _closure3_slot0 = var3;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var3 = 10;
                    var4 = var10[var3];
                    var8 = undefined;
                    var4 = var9.bind(var8)(var4);
                    var7 = var4.intl;
                    var4 = var7.string;
                    var3 = var10[var3];
                    var3 = var9.bind(var8)(var3);
                    var3 = var3.t;
                    var3 = var3.gPX3oK;
                    var3 = var4.bind(var7)(var3);
                    var5['question'] = var3;
 116:
                    var7 = _closure2_slot5;
                    var4 = var7.filter;
                    var3 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.isAnswerFilled;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var3 = var4.bind(var7)(var3);
                    var7 = var3.length;
                    var4 = _closure1_slot8;
                    if(!(var7 < var4)) { _fun0007_ip = 260; continue _fun0007 }
 153:
                    var4 = false;
                    _closure3_slot0 = var4;
                    var4 = _closure2_slot5;
                    var4 = var4[var6];
                    var7 = var4.localCreationAnswerId;
                    var4 = global;
                    var4 = var4.HermesInternal;
                    var6 = var4.concat;
                    var4 = 'answer-';
                    var4 = var6.bind(var4)(var7);
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var3 = 10;
                    var6 = var10[var3];
                    var8 = undefined;
                    var6 = var9.bind(var8)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var3 = var10[var3];
                    var3 = var9.bind(var8)(var3);
                    var3 = var3.t;
                    var3 = var3.fYvzER;
                    var3 = var6.bind(var7)(var3);
                    var5[var4] = var3;
 260:
                    var6 = _closure2_slot5;
                    var4 = var6.forEach;
                    var3 = function(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                            var3 = arg1;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var1 = 4;
                            var4 = var4[var1];
                            var1 = undefined;
                            var5 = var5.bind(var1)(var4);
                            var4 = var5.isIncompleteAnswer;
                            var4 = var4.bind(var5)(var3);
                            if(!var4) { _fun0008_ip = 146; continue _fun0008 }
 42:
                            var5 = false;
                            _closure3_slot0 = var5;
                            var4 = _closure3_slot1;
                            var6 = var3.localCreationAnswerId;
                            var3 = global;
                            var3 = var3.HermesInternal;
                            var5 = var3.concat;
                            var3 = 'answer-';
                            var3 = var5.bind(var3)(var6);
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot3;
                            var2 = 10;
                            var5 = var8[var2];
                            var5 = var7.bind(var1)(var5);
                            var6 = var5.intl;
                            var5 = var6.string;
                            var2 = var8[var2];
                            var2 = var7.bind(var1)(var2);
                            var2 = var2.t;
                            var2 = var2.8Qqkc3;
                            var2 = var5.bind(var6)(var2);
                            var4[var3] = var2;
 146:
                            return var1;
                        }
                    };
                    var3 = var4.bind(var6)(var3);
                    var3 = _closure2_slot11;
                    var4 = undefined;
                    var3 = var3.bind(var4)(var5);
                    var3 = _closure2_slot12;
                    var2 = _closure3_slot0;
                    var2 = !var2;
                    var2 = var3.bind(var4)(var2);
                    var1 = _closure3_slot0;
                    return var1;
                }
            };
            var29 = var29.bind(var28)(var7, var27);
            var _closure2_slot20 = var29;
            var27 = var28.useCallback;
            var7 = _closure1_slot4;
            var6 = function* () {
                var1 = function* anon_0_() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0009_ip = 134; continue _fun0009 }
 10:
                        var4 = _closure2_slot14;
                        var2 = {};
                        var3 = _closure2_slot0;
                        var2['channel'] = var3;
                        var3 = _closure2_slot7;
                        var2['question'] = var3;
                        var3 = _closure2_slot13;
                        var2['answers'] = var3;
                        var3 = _closure2_slot9;
                        var2['allowMultiSelect'] = var3;
                        var3 = _closure2_slot10;
                        var2['duration'] = var3;
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var3 = 11;
                        var6 = var6[var3];
                        var3 = undefined;
                        var6 = var7.bind(var3)(var6);
                        var6 = var6.PollLayoutTypes;
                        var6 = var6.DEFAULT;
                        var2['layout'] = var6;
                        var5 = _closure2_slot1;
                        var2['onClose'] = var5;
                        var2 = var4.bind(var3)(var2);
                        SaveGenerator(address=122);
 120:
                        return var2;
 122:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0009_ip = 131; continue _fun0009 }
 128:
                        return var3;
 131:
                        return var2;
 134:
                        return var1;
                    }
                };
                return var1;
            };
            var7 = var7.bind(var34)(var6);
            var6 = new Array(7);
            var6[0] = var25;
            var6[1] = var33;
            var6[2] = var23;
            var6[3] = var21;
            var6[4] = var32;
            var6[5] = var31;
            var6[6] = var30;
            var7 = var27.bind(var28)(var7, var6);
            var _closure2_slot21 = var7;
            var27 = var28.useCallback;
            var6 = new Array(3);
            var6[0] = var7;
            var6[1] = var5;
            var6[2] = var29;
            var1 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var2 = _closure2_slot15;
                    var2 = !var2;
                    if(!var2) { _fun0010_ip = 23; continue _fun0010 }
 13:
                    var4 = _closure2_slot20;
                    var3 = undefined;
                    var2 = var4.bind(var3)();
 23:
                    if(!var2) { _fun0010_ip = 36; continue _fun0010 }
 26:
                    var2 = _closure2_slot21;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 36:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var27.bind(var28)(var1, var6);
            var1 = {};
            var1['answers'] = var26;
            var1['question'] = var25;
            var1['setQuestion'] = var24;
            var1['allowMultiSelect'] = var23;
            var1['setAllowMultiSelect'] = var22;
            var1['duration'] = var21;
            var1['setDuration'] = var20;
            var1['canPost'] = var19;
            var1['canAddMoreAnswers'] = var18;
            var1['canRemoveMoreAnswers'] = var17;
            var1['handleQuestionChange'] = var16;
            var1['handleAnswerTextChange'] = var15;
            var1['handleGifSelect'] = var14;
            var1['handleEmojiSelect'] = var13;
            var1['handleCustomUpload'] = var12;
            var1['handleAddAnswer'] = var11;
            var1['handleRemoveAnswer'] = var10;
            var1['handleRemoveAnswerImage'] = var9;
            var1['fieldErrors'] = var8;
            var1['createPoll'] = var7;
            var1['handleSubmitPoll'] = var6;
            var1['submitting'] = var5;
            var1['createPollError'] = var4;
            var1['shouldFocusOnInvalidField'] = var3;
            var1['setShouldFocusOnInvalidField'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();