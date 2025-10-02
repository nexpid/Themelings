// app/modules/remixing/native/RemixAnalyticsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot8;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot8;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function getImageId(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var1 = var2.local;
            if(var1) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var6 = var2.messageId;
            var5 = var2.mediaIndex;
            var1 = global;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var3 = '';
            var1 = '-';
            var1 = var4.bind(var3)(var6, var1, var5);
            _fun0004_ip = 38; continue _fun0004;
case 36:
            var4 = var2.uri;
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = 'local-';
            var1 = var3.bind(var2)(var4);
case 38:
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function getAllComponentInfo() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = new Array(0);
            var3 = new Array(0);
            var4 = _closure1_slot7;
            var1 = _closure1_slot5;
            var5 = var1.currentRenderedCanvas;
            var7 = null;
            var9 = var7 == var5;
            var6 = undefined;
            var1 = undefined;
            if(var9) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var1 = var5.components;
case 39:
            var5 = var4.bind(var6)(var1);
            var4 = var5.bind(var6)();
            var1 = var4.done;
            if(var1) { _fun0005_ip = 41; continue _fun0005 }
case 7:
            var10 = var4.value;
            var9 = var10.type;
            var1 = _closure1_slot11;
            var10 = var1.bind(var6)(var10);
            var1 = var7 != var9;
            if(!var1) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var1 = var7 != var10;
case 42:
            if(!var1) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var1 = var2.push;
            var1 = var1.bind(var2)(var10);
            var1 = var3.push;
            var1 = var1.bind(var3)(var9);
case 44:
            var9 = var5.bind(var6)();
            var1 = var9.done;
            var4 = var9;
            if(!var1) { _fun0005_ip = 7; continue _fun0005 }
case 41:
            var1 = new Array(2);
            var1[0] = var3;
            var1[1] = var2;
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function getSubEffects(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var5 = var1.type;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var7 = 5;
            var3 = var3[var7];
            var4 = undefined;
            var3 = var6.bind(var4)(var3);
            var3 = var3.RemixElement;
            var3 = var3.TEXT;
            if(!(var3 !== var5)) { _fun0006_ip = 46; continue _fun0006 }
case 47:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var4)(var3);
            var3 = var3.RemixElement;
            var3 = var3.DRAWING;
            if(!(var3 !== var5)) { _fun0006_ip = 48; continue _fun0006 }
case 49:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 6;
            var6 = var5[var2];
            var8 = var3.bind(var4)(var6);
            var7 = var8.getScaleFromTransforms2d;
            var6 = var1.transform;
            var7 = var7.bind(var8)(var6);
            var2 = var5[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.getRotateFromTransforms2d;
            var2 = var1.transform;
            var6 = var3.bind(var4)(var2);
            var2 = 'scale:none|';
            var3 = 1;
            if(!(var3 !== var7)) { _fun0006_ip = 50; continue _fun0006 }
case 51:
            var3 = global;
            var3 = var3.HermesInternal;
            var5 = var3.concat;
            var4 = 'scale:';
            var3 = '|';
            var2 = var5.bind(var4)(var7, var3);
case 50:
            var3 = '' + var2;
            var2 = 'rotate:none';
            var4 = 0;
            if(!(var4 !== var6)) { _fun0006_ip = 52; continue _fun0006 }
case 53:
            var4 = global;
            var4 = var4.HermesInternal;
            var5 = var4.concat;
            var4 = 'rotate:';
            var2 = var5.bind(var4)(var6);
case 52:
            var2 = var3 + var2;
            return var2;
case 48:
            var6 = var1.color;
            var5 = var1.strokeWidth;
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = 'color:';
            var2 = '|strokeWidth:';
            var2 = var4.bind(var3)(var6, var2, var5);
            return var2;
case 46:
            var2 = var1.textParams;
            var16 = var2.backgroundColor;
            var2 = var1.textParams;
            var14 = var2.color;
            var2 = var1.textParams;
            var12 = var2.fontSize;
            var1 = var1.textParams;
            var10 = var1.fontSource;
            var1 = global;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var17 = 'bgColor:';
            var15 = '|txtColor:';
            var13 = '|fontsize:';
            var11 = '|fontType:';
            var1 = var17[var5](var16, var15, var14, var13, var12, var11, var10, var9);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/remixing/native/RemixAnalyticsUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useTrackRemixingSurfaceOpenAndExit() {
        var4 = _closure1_slot4;
        var3 = var4.useEffect;
        var2 = function() {
            var3 = _closure1_slot5;
            var2 = var3.getRemixingSource;
            var6 = var2.bind(var3)();
            var _closure3_slot0 = var6;
            var3 = _closure1_slot5;
            var2 = var3.getSessionId;
            var9 = var2.bind(var3)();
            var _closure3_slot1 = var9;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 4;
            var2 = var4[var2];
            var8 = undefined;
            var5 = var3.bind(var8)(var2);
            var4 = var5.track;
            var2 = _closure1_slot6;
            var3 = var2.REMIXING_SURFACE_OPENED;
            var2 = {};
            var2['remixing_session_id'] = var9;
            var7 = _closure1_slot9;
            var7 = var7.bind(var8)(var6);
            var2['image_id'] = var7;
            var7 = var6.guildId;
            var2['guild_id'] = var7;
            var6 = var6.channelId;
            var2['channel_id'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure1_slot5;
                    var1 = var2.getUsedRemix;
                    var1 = var1.bind(var2)();
                    var3 = _closure1_slot5;
                    var2 = var3.getUndoEnabled;
                    var5 = var2.bind(var3)();
                    if(var1) { _fun0007_ip = 54; continue _fun0007 }
case 55:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 4;
                    var1 = var3[var1];
                    var8 = undefined;
                    var4 = var2.bind(var8)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot6;
                    var2 = var1.REMIXING_SURFACE_EXITED;
                    var1 = {};
                    var9 = _closure3_slot1;
                    var1['remixing_session_id'] = var9;
                    var7 = _closure1_slot9;
                    var6 = _closure3_slot0;
                    var6 = var7.bind(var8)(var6);
                    var1['image_id'] = var6;
                    var5 = !var5;
                    var1['no_edits'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 54:
                    var1 = undefined;
                    return var1;
                }
            };
            return var1;
        };
        var1 = new Array(0);
        var1 = var3.bind(var4)(var2, var1);
        var1 = undefined;
        return var1;
    };
    var3['useTrackRemixingSurfaceOpenAndExit'] = var4;
    var4 = function trackRemixSurfaceExitModal() {
        var3 = _closure1_slot5;
        var1 = var3.getSessionId;
        var6 = var1.bind(var3)();
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 4;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.track;
        var2 = _closure1_slot6;
        var3 = var2.REMIX_SURFACE_EXIT_MODAL;
        var2 = {};
        var2['remixing_session_id'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackRemixSurfaceExitModal'] = var4;
    var4 = function trackRemixingSurfaceExitCanceled() {
        var2 = _closure1_slot5;
        var1 = var2.getSessionId;
        var8 = var1.bind(var2)();
        var2 = _closure1_slot5;
        var1 = var2.getRemixingSource;
        var7 = var1.bind(var2)();
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot6;
        var3 = var2.REMIXING_SURFACE_EXIT_CANCELED;
        var2 = {};
        var2['remixing_session_id'] = var8;
        var6 = _closure1_slot9;
        var6 = var6.bind(var1)(var7);
        var2['image_id'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackRemixingSurfaceExitCanceled'] = var4;
    var4 = function trackRemixDownloaded() {
        var2 = _closure1_slot5;
        var1 = var2.getSessionId;
        var10 = var1.bind(var2)();
        var2 = _closure1_slot5;
        var1 = var2.getRemixingSource;
        var9 = var1.bind(var2)();
        var2 = _closure1_slot10;
        var1 = undefined;
        var4 = var2.bind(var1)();
        var3 = _closure1_slot3;
        var2 = 2;
        var3 = var3.bind(var1)(var4, var2);
        var2 = 0;
        var7 = var3[var2];
        var2 = 1;
        var6 = var3[var2];
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 4;
        var2 = var4[var2];
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot6;
        var3 = var2.REMIX_DOWNLOADED;
        var2 = {};
        var2['remixing_session_id'] = var10;
        var8 = _closure1_slot9;
        var8 = var8.bind(var1)(var9);
        var2['image_id'] = var8;
        var2['components'] = var7;
        var2['sub_effects'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackRemixDownloaded'] = var4;
    var4 = function trackRemixSent() {
        var2 = _closure1_slot5;
        var1 = var2.getSessionId;
        var12 = var1.bind(var2)();
        var2 = _closure1_slot5;
        var1 = var2.getRemixingSource;
        var11 = var1.bind(var2)();
        var2 = _closure1_slot10;
        var1 = undefined;
        var4 = var2.bind(var1)();
        var3 = _closure1_slot3;
        var2 = 2;
        var3 = var3.bind(var1)(var4, var2);
        var2 = 0;
        var9 = var3[var2];
        var2 = 1;
        var8 = var3[var2];
        var3 = _closure1_slot5;
        var2 = var3.getStartTime;
        var7 = var2.bind(var3)();
        var2 = global;
        var2 = var2.Date;
        var3 = var2.prototype;
        var3 = Object.create(var3, {constructor: {value: var2}});
        var15 = var3;
        var2 = new var15[var2](var14);
        var3 = var2 instanceof Object ? var2 : var3;
        var2 = var3.getTime;
        var6 = var2.bind(var3)();
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 4;
        var2 = var4[var2];
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot6;
        var3 = var2.REMIX_SENT;
        var2 = {};
        var2['remixing_session_id'] = var12;
        var10 = _closure1_slot9;
        var10 = var10.bind(var1)(var11);
        var2['image_id'] = var10;
        var2['components'] = var9;
        var2['sub_effects'] = var8;
        var7 = var6 - var7;
        var6 = 1000;
        var6 = var7 / var6;
        var2['duration'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackRemixSent'] = var4;
    var4 = function trackRemixingComponentToolOpened(arg1) {
        var3 = _closure1_slot5;
        var1 = var3.getSessionId;
        var6 = var1.bind(var3)();
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 4;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.track;
        var2 = _closure1_slot6;
        var3 = var2.REMIXING_COMPONENT_TOOL_OPENED;
        var2 = {};
        var2['remixing_session_id'] = var6;
        var6 = arg1;
        var2['component_type'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackRemixingComponentToolOpened'] = var4;
    var4 = function trackRemixingComponentAdded(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot5;
            var1 = var3.getSessionId;
            var8 = var1.bind(var3)();
            var6 = var4.type;
            var3 = _closure1_slot11;
            var1 = undefined;
            var7 = var3.bind(var1)(var4);
            var3 = null;
            if(!(var3 != var7)) { _fun0008_ip = 56; continue _fun0008 }
case 57:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 4;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.track;
            var2 = _closure1_slot6;
            var3 = var2.REMIXING_COMPONENT_ADDED;
            var2 = {};
            var2['remixing_session_id'] = var8;
            var2['component_type'] = var6;
            var6 = new Array(1);
            var6[0] = var7;
            var2['sub_effects'] = var6;
            var2 = var4.bind(var5)(var3, var2);
case 56:
            return var1;
        }
    };
    var3['trackRemixingComponentAdded'] = var4;
    var4 = function trackRemixingUpsellAccepted(arg1) {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 4;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.track;
        var2 = _closure1_slot6;
        var3 = var2.REMIXING_UPSELL_ACCEPTED;
        var2 = {};
        var6 = arg1;
        var2['location'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackRemixingUpsellAccepted'] = var4;
    var4 = function trackRemixingUpsellDismissed(arg1) {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 4;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.track;
        var2 = _closure1_slot6;
        var3 = var2.REMIXING_UPSELL_DISMISSED;
        var2 = {};
        var6 = arg1;
        var2['location'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackRemixingUpsellDismissed'] = var4;
    var4 = function trackRemixingComponentToolCanceled(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var1 = arg2;
            if(!var1) { _fun0009_ip = 58; continue _fun0009 }
case 59:
            var3 = _closure1_slot5;
            var1 = var3.getLastComponentAdded;
            var4 = var1.bind(var3)();
            var1 = null;
            var5 = var1 == var4;
            var1 = undefined;
            var3 = undefined;
            if(var5) { _fun0009_ip = 60; continue _fun0009 }
case 55:
            var3 = var4.type;
case 60:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 5;
            var2 = var5[var2];
            var2 = var4.bind(var1)(var2);
            var2 = var2.RemixElement;
            var2 = var2.DRAWING;
            if(!(var3 !== var2)) { _fun0009_ip = 61; continue _fun0009 }
case 58:
            var4 = _closure1_slot5;
            var2 = var4.getSessionId;
            var7 = var2.bind(var4)();
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 4;
            var4 = var4[var2];
            var2 = undefined;
            var6 = var5.bind(var2)(var4);
            var5 = var6.track;
            var3 = _closure1_slot6;
            var4 = var3.REMIXING_COMPONENT_TOOL_CANCELED;
            var3 = {};
            var3['remixing_session_id'] = var7;
            var7 = arg1;
            var3['component_type'] = var7;
            var3 = var5.bind(var6)(var4, var3);
            return var2;
case 61:
            return var1;
        }
    };
    var3['trackRemixingComponentToolCanceled'] = var4;
    var4 = function trackRemixingActionRedone() {
        var3 = _closure1_slot5;
        var1 = var3.getSessionId;
        var6 = var1.bind(var3)();
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 4;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.track;
        var2 = _closure1_slot6;
        var3 = var2.REMIXING_ACTION_REDONE;
        var2 = {};
        var2['remixing_session_id'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackRemixingActionRedone'] = var4;
    var2 = function trackRemixingActionUndone() {
        var3 = _closure1_slot5;
        var1 = var3.getSessionId;
        var6 = var1.bind(var3)();
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 4;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.track;
        var2 = _closure1_slot6;
        var3 = var2.REMIXING_ACTION_UNDONE;
        var2 = {};
        var2['remixing_session_id'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['trackRemixingActionUndone'] = var2;
    return var1;
})();