// app/modules/safety_hub/SafetyHubUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function parseMessageEmbedForProps(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.fields;
            var5 = null;
            if(!(var5 == var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = undefined;
            return var2;
case 2:
            var6 = var1.fields;
            var3 = var6.reduce;
            var2 = function(arg1, arg2) {
                var1 = arg1;
                var2 = arg2;
                var3 = var2.rawName;
                var2 = var2.rawValue;
                var1[var3] = var2;
                return var1;
            };
            var1 = {};
            var3 = var3.bind(var6)(var2, var1);
            var1 = {};
            var6 = _closure1_slot6;
            var6 = var6.HEADER;
            var7 = var3[var6];
            var9 = var5 != var7;
            var8 = '';
            var6 = var8;
            if(!var9) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var7;
case 4:
            var1['header'] = var6;
            var6 = _closure1_slot6;
            var6 = var6.ICON_TYPE;
            var6 = var3[var6];
            var1['icon'] = var6;
            var6 = _closure1_slot6;
            var6 = var6.BODY;
            var7 = var3[var6];
            var9 = var5 != var7;
            var6 = var8;
            if(!var9) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var7;
case 6:
            var1['body'] = var6;
            var6 = _closure1_slot6;
            var6 = var6.CTAS;
            var6 = var3[var6];
            var7 = var5 != var6;
            if(!var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = var6;
case 8:
            var7 = var8.split;
            var6 = ',';
            var7 = var7.bind(var8)(var6);
            var6 = var7.filter;
            var4 = function(arg1) {
                var2 = '';
                var1 = arg1;
                var1 = var2 !== var1;
                return var1;
            };
            var4 = var6.bind(var7)(var4);
            var1['ctas'] = var4;
            var4 = global;
            var6 = var4.parseFloat;
            var4 = _closure1_slot6;
            var4 = var4.TIMESTAMP;
            var4 = var3[var4];
            var7 = var5 != var4;
            var5 = 0;
            if(!var7) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var5 = var4;
case 10:
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var1['timestamp'] = var4;
            var4 = _closure1_slot6;
            var4 = var4.THEME;
            var4 = var3[var4];
            var1['theme'] = var4;
            var4 = _closure1_slot6;
            var4 = var4.LEARN_MORE_LINK;
            var4 = var3[var4];
            var1['learn_more_link'] = var4;
            var2 = _closure1_slot6;
            var2 = var2.CLASSIFICATION_ID;
            var2 = var3[var2];
            var1['classification_id'] = var2;
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.AppealIngestionSignal;
    var _closure1_slot4 = var8;
    var8 = var5.SafetySystemNotificationCtaType;
    var _closure1_slot5 = var8;
    var5 = var5.SafetySystemNotificationEmbedKeys;
    var _closure1_slot6 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.AbortCodes;
    var _closure1_slot7 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.SPOILER_ATTACHMENT_PREFIX;
    var _closure1_slot8 = var5;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/safety_hub/SafetyHubUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function getClassificationRelativeIncidentTime(arg1) {
        var4 = _closure1_slot1;
        var6 = _closure1_slot2;
        var1 = 4;
        var2 = var6[var1];
        var5 = undefined;
        var2 = var4.bind(var5)(var2);
        var3 = var2.bind(var5)();
        var2 = var3.to;
        var1 = var6[var1];
        var4 = var4.bind(var5)(var1);
        var1 = arg1;
        var1 = var4.bind(var5)(var1);
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['getClassificationRelativeIncidentTime'] = var5;
    var5 = function getAttachmentFilename(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 5;
            var1 = var1[var6];
            var5 = undefined;
            var7 = var4.bind(var5)(var1);
            var4 = var7.isImageFile;
            var1 = var2.filename;
            var1 = var4.bind(var7)(var1);
            if(var1) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var5 = var4.bind(var5)(var1);
            var4 = var5.isVideoFile;
            var1 = var2.filename;
            var1 = var4.bind(var5)(var1);
            if(var1) { _fun0002_ip = 12; continue _fun0002 }
case 14:
            var4 = var2.filename;
            var1 = null;
            var5 = var1 != var4;
            var1 = '';
            if(!var5) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var1 = var4;
case 15:
            _fun0002_ip = 17; continue _fun0002;
case 12:
            var5 = _closure1_slot8;
            var2 = var2.filename;
            var3 = null;
            var3 = var3 != var2;
            var4 = '.png';
            if(!var3) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var4 = var2;
case 18:
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = '';
            var1 = var3.bind(var2)(var5, var4);
case 17:
            return var1;
        }
    };
    var3['getAttachmentFilename'] = var5;
    var5 = function parseMessageForProps(arg1) {
        var3 = _closure1_slot9;
        var1 = arg1;
        var2 = var1.embeds;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var3['parseMessageForProps'] = var5;
    var3['parseMessageEmbedForProps'] = var4;
    var4 = function mapCtaToNativeData(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var5 = arg3;
            var1 = _closure1_slot5;
            var1 = var1.LEARN_MORE_LINK;
            if(!(var1 !== var4)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var1 = _closure1_slot5;
            var1 = var1.POLICY_VIOLATION_DETAIL;
            if(!(var1 !== var4)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var1 = undefined;
            return var1;
case 22:
            var1 = {};
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 6;
            var6 = var10[var4];
            var8 = undefined;
            var6 = var9.bind(var8)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var4 = var10[var4];
            var4 = var9.bind(var8)(var4);
            var4 = var4.t;
            var4 = var4.QsqdXF;
            var4 = var6.bind(var7)(var4);
            var1['text'] = var4;
            var4 = _closure1_slot5;
            var4 = var4.POLICY_VIOLATION_DETAIL;
            var1['type'] = var4;
            var4 = null;
            var6 = var4 != var5;
            var4 = '';
            if(!var6) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var4 = var5;
case 24:
            var1['key'] = var4;
            return var1;
case 20:
            var1 = {};
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 6;
            var5 = var9[var4];
            var7 = undefined;
            var5 = var8.bind(var7)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var9[var4];
            var4 = var8.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.8/GdRE;
            var4 = var5.bind(var6)(var4);
            var1['text'] = var4;
            var2 = _closure1_slot5;
            var2 = var2.LEARN_MORE_LINK;
            var1['type'] = var2;
            var2 = null;
            var4 = var2 != var3;
            var2 = '';
            if(!var4) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var2 = var3;
case 26:
            var1['key'] = var2;
            return var1;
        }
    };
    var3['mapCtaToNativeData'] = var4;
    var4 = function isFlaggedContentEmpty(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var2 = var3.type;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 7;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var1 = var1.ContentIdType;
            var1 = var1.MESSAGE;
            var1 = var2 !== var1;
            if(var1) { _fun0004_ip = 28; continue _fun0004 }
case 29:
            var4 = var3.content;
            var2 = '';
            var2 = var2 === var4;
            if(!var2) { _fun0004_ip = 14; continue _fun0004 }
case 30:
            var3 = var3.attachments;
            var4 = var3.length;
            var3 = 0;
            var2 = var3 === var4;
case 14:
            var1 = var2;
case 28:
            return var1;
        }
    };
    var3['isFlaggedContentEmpty'] = var4;
    var4 = function(arg1) {
        var2 = {};
        var3 = _closure1_slot4;
        var5 = var3.DIDNT_VIOLATE_POLICY;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 6;
        var4 = var8[var1];
        var6 = undefined;
        var4 = var7.bind(var6)(var4);
        var10 = var4.intl;
        var9 = var10.string;
        var4 = var8[var1];
        var4 = var7.bind(var6)(var4);
        var4 = var4.t;
        var4 = var4.mZffAg;
        var4 = var9.bind(var10)(var4);
        var2[var5] = var4;
        var5 = var3.TOO_STRICT_UNFAIR;
        var4 = var8[var1];
        var4 = var7.bind(var6)(var4);
        var10 = var4.intl;
        var9 = var10.string;
        var4 = var8[var1];
        var4 = var7.bind(var6)(var4);
        var4 = var4.t;
        var4 = var4.wgZVAg;
        var4 = var9.bind(var10)(var4);
        var2[var5] = var4;
        var5 = var3.DONT_AGREE_PENALTY;
        var4 = var8[var1];
        var4 = var7.bind(var6)(var4);
        var10 = var4.intl;
        var9 = var10.string;
        var4 = var8[var1];
        var4 = var7.bind(var6)(var4);
        var4 = var4.t;
        var4 = var4.eu8G4u;
        var4 = var9.bind(var10)(var4);
        var2[var5] = var4;
        var3 = var3.SOMETHING_ELSE;
        var4 = var8[var1];
        var4 = var7.bind(var6)(var4);
        var5 = var4.intl;
        var4 = var5.string;
        var1 = var8[var1];
        var1 = var7.bind(var6)(var1);
        var1 = var1.t;
        var1 = var1.XU3s6u;
        var1 = var4.bind(var5)(var1);
        var2[var3] = var1;
        var1 = arg1;
        var1 = var2[var1];
        return var1;
    };
    var3['getAppealSignalDisplayText'] = var4;
    var4 = function(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var2 = var1 == var4;
            var6 = '';
            var1 = var6;
            if(var2) { _fun0005_ip = 31; continue _fun0005 }
case 32:
            var2 = var4.length;
            var5 = 0;
            var1 = var6;
            if(!(var5 !== var2)) { _fun0005_ip = 31; continue _fun0005 }
case 33:
            var2 = var4.length;
            var3 = 1;
            if(!(var3 !== var2)) { _fun0005_ip = 34; continue _fun0005 }
case 35:
            var2 = var4.charAt;
            var5 = var2.bind(var4)(var5);
            var2 = var5.toUpperCase;
            var5 = var2.bind(var5)();
            var2 = var4.slice;
            var3 = var2.bind(var4)(var3);
            var2 = global;
            var2 = var2.HermesInternal;
            var2 = var2.concat;
            var2 = var2.bind(var6)(var5, var3);
            _fun0005_ip = 15; continue _fun0005;
case 34:
            var3 = var4.toUpperCase;
            var2 = var3.bind(var4)();
case 15:
            var1 = var2;
case 31:
            return var1;
        }
    };
    var3['capitalizeText'] = var4;
    var4 = function isGuildClassification(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var3 = null;
            var1 = var3 != var2;
            if(!var1) { _fun0006_ip = 36; continue _fun0006 }
case 37:
            var2 = var2.guild_metadata;
            var1 = var3 != var2;
case 36:
            return var1;
        }
    };
    var3['isGuildClassification'] = var4;
    var4 = function(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = _closure1_slot7;
            var3 = var1.DSA_APPEAL_REQUEST_DEFLECTION;
            var1 = arg1;
            if(!(var1 !== var3)) { _fun0007_ip = 38; continue _fun0007 }
case 39:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 6;
            var3 = var7[var1];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var1 = var7[var1];
            var1 = var6.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.aPmsx8;
            var1 = var3.bind(var4)(var1);
            _fun0007_ip = 40; continue _fun0007;
case 38:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 6;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.0qyXXF;
            var1 = var3.bind(var4)(var2);
case 40:
            return var1;
        }
    };
    var3['getRequestReviewErrorFromCode'] = var4;
    var4 = function getClassificationExpiration(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = undefined;
            var1 = arg1;
            var3 = var1.max_expiration_time;
            var2 = var3;
            var1 = null;
            if(!(var1 != var3)) { _fun0008_ip = 41; continue _fun0008 }
case 39: // try_start_0
            var3 = global;
            var4 = var3.Date;
            var5 = var2;
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var6 = var3;
            var2 = new var6[var4](var5, var4);
            var2 = var2 instanceof Object ? var2 : var3;
case 42: // try_end0
            return var2;
case 43: // catch_target0
            CatchBlockStart(arg_register=1);
            return var1;
case 41:
            return var1;
        }
    };
    var3['getClassificationExpiration'] = var4;
    var4 = function() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 8;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            var2 = _closure1_slot3;
            var1 = var2.getSuspendedUserToken;
            var1 = var1.bind(var2)();
            return var1;
        };
        var2 = var3.bind(var4)(var2, var1);
        var1 = null;
        var1 = var1 != var2;
        return var1;
    };
    var3['useIsSuspendedUser'] = var4;
    var2 = function isCurrentUserSuspended() {
        var2 = _closure1_slot3;
        var1 = var2.getSuspendedUserToken;
        var2 = var1.bind(var2)();
        var1 = null;
        var1 = var1 != var2;
        return var1;
    };
    var3['isCurrentUserSuspended'] = var2;
    return var1;
})();