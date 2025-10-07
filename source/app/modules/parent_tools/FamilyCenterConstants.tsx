// app/modules/parent_tools/FamilyCenterConstants.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var26 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var25 = dependencyMap;
    var _closure1_slot0 = var26;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var25;
    var29 = function getDescriptionForGuildActivity(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg2;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 2;
            var3 = var7[var3];
            var6 = undefined;
            var3 = var4.bind(var6)(var3);
            var5 = var3.intl;
            var4 = var5.string;
            var3 = _closure1_slot1;
            var1 = 3;
            var1 = var7[var1];
            var3 = var3.bind(var6)(var1);
            var1 = arg1;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = var3.823ugY;
            var1 = var4.bind(var5)(var1);
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var6 = var3.DLVyFx;
            var1 = var4.bind(var5)(var6);
case 6:
            _fun0001_ip = 7; continue _fun0001;
case 2:
            if(var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = var3.dcvNX1;
            var2 = var4.bind(var5)(var2);
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var3 = var3.c0NgBQ;
            var2 = var4.bind(var5)(var3);
case 10:
            var1 = var2;
case 7:
            return var1;
        }
    };
    var4 = global;
    var8 = var4.Object;
    var7 = var8.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var5);
    var28 = 0;
    var5 = var25[var28];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var5 = var5.Millis;
    var7 = var5.SECOND;
    var5 = 30;
    var24 = var5 * var7;
    var5 = var25[var28];
    var5 = var6.bind(var1)(var5);
    var5 = var5.Millis;
    var5 = var5.MINUTE;
    var9 = 5;
    var20 = var9 * var5;
    var27 = 1;
    var5 = var25[var27];
    var8 = var26.bind(var1)(var5);
    var7 = var8.wrapPaths;
    var10 = var4.Object;
    var6 = var10.freeze;
    var5 = {'FAMILY_CENTER_SETTINGS': '/family-center/settings', 'FAMILY_CENTER_MY_FAMILY': '/family-center/my-family'};
    var6 = var6.bind(var10)(var5);
    var5 = [':', '?', '@'];
    var19 = var7.bind(var8)(var6, var5);
    var18 = {};
    var18['DM_MESSAGE_SEND'] = var27;
    var5 = 'DM_MESSAGE_SEND';
    var18[var27] = var5;
    var5 = 2;
    var18['GDM_MESSAGE_SEND'] = var5;
    var6 = 'GDM_MESSAGE_SEND';
    var18[var5] = var6;
    var22 = 3;
    var18['MESSAGE_REACT'] = var22;
    var6 = 'MESSAGE_REACT';
    var18[var22] = var6;
    var21 = 4;
    var18['ADD_FRIEND'] = var21;
    var6 = 'ADD_FRIEND';
    var18[var21] = var6;
    var18['SEND_CALL'] = var9;
    var6 = 'SEND_CALL';
    var18[var9] = var6;
    var8 = 6;
    var18['CALL_JOIN'] = var8;
    var6 = 'CALL_JOIN';
    var18[var8] = var6;
    var7 = 7;
    var18['GUILD_JOIN'] = var7;
    var6 = 'GUILD_JOIN';
    var18[var7] = var6;
    var23 = 8;
    var18['GUILD_MESSAGE_SEND'] = var23;
    var6 = 'GUILD_MESSAGE_SEND';
    var18[var23] = var6;
    var10 = 9;
    var18['GUILD_VC_JOIN'] = var10;
    var6 = 'GUILD_VC_JOIN';
    var18[var10] = var6;
    var10 = 10;
    var18['GUILD_VOICE_CHANNEL_LEAVE'] = var10;
    var6 = 'GUILD_VOICE_CHANNEL_LEAVE';
    var18[var10] = var6;
    var10 = 11;
    var18['CALL_LEAVE'] = var10;
    var6 = 'CALL_LEAVE';
    var18[var10] = var6;
    var10 = 12;
    var18['CALL_START'] = var10;
    var6 = 'CALL_START';
    var18[var10] = var6;
    var10 = 13;
    var18['INVOICE_COMPLETE'] = var10;
    var6 = 'INVOICE_COMPLETE';
    var18[var10] = var6;
    var17 = {};
    var17['PARENT'] = var27;
    var6 = 'PARENT';
    var17[var27] = var6;
    var17['CHILD'] = var5;
    var6 = 'CHILD';
    var17[var5] = var6;
    var16 = {};
    var16['PENDING'] = var27;
    var6 = 'PENDING';
    var16[var27] = var6;
    var16['ACTIVE'] = var5;
    var6 = 'ACTIVE';
    var16[var5] = var6;
    var16['INACTIVE'] = var22;
    var6 = 'INACTIVE';
    var16[var22] = var6;
    var16['DECLINED'] = var21;
    var6 = 'DECLINED';
    var16[var21] = var6;
    var16['EXPIRED'] = var9;
    var6 = 'EXPIRED';
    var16[var9] = var6;
    var15 = {};
    var15['USER_ADD'] = var27;
    var6 = 'USER_ADD';
    var15[var27] = var6;
    var15['GUILD_ADD'] = var5;
    var6 = 'GUILD_ADD';
    var15[var5] = var6;
    var15['USER_INTERACTION'] = var22;
    var6 = 'USER_INTERACTION';
    var15[var22] = var6;
    var15['GUILD_INTERACTION'] = var21;
    var6 = 'GUILD_INTERACTION';
    var15[var21] = var6;
    var15['USER_CALLED'] = var9;
    var6 = 'USER_CALLED';
    var15[var9] = var6;
    var15['TOTAL_VOICE_MINUTES'] = var8;
    var6 = 'TOTAL_VOICE_MINUTES';
    var15[var8] = var6;
    var15['PURCHASES'] = var7;
    var6 = 'PURCHASES';
    var15[var7] = var6;
    var14 = {};
    var30 = 'ACTIVITY';
    var14['ACTIVITY'] = var30;
    var12 = 'REQUESTS';
    var14['REQUESTS'] = var12;
    var6 = 'SETTINGS';
    var14['SETTINGS'] = var6;
    var11 = 'CONTENT_AND_SOCIAL';
    var14['CONTENT_AND_SOCIAL'] = var11;
    var10 = 'DATA_AND_PRIVACY';
    var14['DATA_AND_PRIVACY'] = var10;
    var13 = {};
    var13['ACTIVITY'] = var28;
    var13[var28] = var30;
    var13['REQUESTS'] = var27;
    var13[var27] = var12;
    var13['SETTINGS'] = var5;
    var13[var5] = var6;
    var13['CONTENT_AND_SOCIAL'] = var22;
    var13[var22] = var11;
    var13['DATA_AND_PRIVACY'] = var21;
    var13[var21] = var10;
    var12 = {};
    var10 = 'SIDENAV';
    var12['SIDENAV'] = var10;
    var12['SETTINGS'] = var6;
    var11 = {};
    var11['SIDENAV'] = var28;
    var11[var28] = var10;
    var11['SETTINGS'] = var27;
    var11[var27] = var6;
    var10 = {};
    var10['TabChange'] = var28;
    var6 = 'TabChange';
    var10[var28] = var6;
    var10['ShowQRCodeModal'] = var27;
    var6 = 'ShowQRCodeModal';
    var10[var27] = var6;
    var10['RevealQRCode'] = var5;
    var6 = 'RevealQRCode';
    var10[var5] = var6;
    var10['ScanQRCodeButton'] = var22;
    var6 = 'ScanQRCodeButton';
    var10[var22] = var6;
    var10['ScanQRCode'] = var21;
    var6 = 'ScanQRCode';
    var10[var21] = var6;
    var10['LoadMore'] = var9;
    var6 = 'LoadMore';
    var10[var9] = var6;
    var10['SelectTeen'] = var8;
    var6 = 'SelectTeen';
    var10[var8] = var6;
    var10['HideQRCode'] = var7;
    var6 = 'HideQRCode';
    var10[var7] = var6;
    var8 = var4.Map;
    var6 = var15.USER_INTERACTION;
    var7 = new Array(2);
    var7[0] = var6;
    var6 = {};
    var9 = 100;
    var6['priority'] = var9;
    var9 = function tooltipHeader() {
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 2;
        var2 = var6[var2];
        var5 = undefined;
        var2 = var3.bind(var5)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var4 = _closure1_slot1;
        var1 = 3;
        var1 = var6[var1];
        var1 = var4.bind(var5)(var1);
        var1 = var1.kvTgWF;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var6['tooltipHeader'] = var9;
    var9 = function tooltipDescription(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 2;
            var2 = var6[var2];
            var5 = undefined;
            var2 = var3.bind(var5)(var2);
            var4 = var2.intl;
            var3 = var4.string;
            var2 = _closure1_slot1;
            var1 = 3;
            var1 = var6[var1];
            var2 = var2.bind(var5)(var1);
            var1 = arg1;
            if(var1) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var1 = var2.K5r+sL;
            var1 = var3.bind(var4)(var1);
            _fun0002_ip = 13; continue _fun0002;
case 11:
            var2 = var2.cY19ub;
            var1 = var3.bind(var4)(var2);
case 13:
            return var1;
        }
    };
    var6['tooltipDescription'] = var9;
    var9 = function sectionHeader(arg1) {
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 2;
        var2 = var6[var2];
        var5 = undefined;
        var2 = var3.bind(var5)(var2);
        var4 = var2.intl;
        var3 = var4.formatToPlainString;
        var2 = _closure1_slot1;
        var1 = 3;
        var1 = var6[var1];
        var1 = var2.bind(var5)(var1);
        var2 = var1.4T3zWV;
        var1 = {};
        var5 = arg1;
        var1['count'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var6['sectionHeader'] = var9;
    var9 = function sectionDescription(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 2;
            var2 = var6[var2];
            var5 = undefined;
            var2 = var3.bind(var5)(var2);
            var4 = var2.intl;
            var3 = var4.string;
            var2 = _closure1_slot1;
            var1 = 3;
            var1 = var6[var1];
            var2 = var2.bind(var5)(var1);
            var1 = arg1;
            if(var1) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var1 = var2.K5r+sL;
            var1 = var3.bind(var4)(var1);
            _fun0003_ip = 13; continue _fun0003;
case 11:
            var2 = var2.cY19ub;
            var1 = var3.bind(var4)(var2);
case 13:
            return var1;
        }
    };
    var6['sectionDescription'] = var9;
    var9 = function timestampFormatter() {
        var1 = {};
        var7 = _closure1_slot0;
        var5 = _closure1_slot2;
        var6 = 2;
        var3 = var5[var6];
        var4 = undefined;
        var3 = var7.bind(var4)(var3);
        var10 = var3.intl;
        var9 = var10.string;
        var3 = _closure1_slot1;
        var2 = 3;
        var8 = var5[var2];
        var8 = var3.bind(var4)(var8);
        var8 = var8.fLBUx8;
        var8 = var9.bind(var10)(var8);
        var1['today'] = var8;
        var6 = var5[var6];
        var6 = var7.bind(var4)(var6);
        var8 = var6.intl;
        var7 = var8.string;
        var6 = var5[var2];
        var6 = var3.bind(var4)(var6);
        var6 = var6.cHHgxM;
        var6 = var7.bind(var8)(var6);
        var1['yesterday'] = var6;
        var2 = var5[var2];
        var2 = var3.bind(var4)(var2);
        var2 = var2.qvKjp6;
        var1['days'] = var2;
        return var1;
    };
    var6['timestampFormatter'] = var9;
    var7[1] = var6;
    var6 = new Array(5);
    var6[0] = var7;
    var9 = var15.USER_CALLED;
    var7 = new Array(2);
    var7[0] = var9;
    var9 = {};
    var30 = 200;
    var9['priority'] = var30;
    var30 = function tooltipHeader() {
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 2;
        var2 = var6[var2];
        var5 = undefined;
        var2 = var3.bind(var5)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var4 = _closure1_slot1;
        var1 = 3;
        var1 = var6[var1];
        var1 = var4.bind(var5)(var1);
        var1 = var1.D7Sng4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var9['tooltipHeader'] = var30;
    var30 = function tooltipDescription(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 2;
            var2 = var6[var2];
            var5 = undefined;
            var2 = var3.bind(var5)(var2);
            var4 = var2.intl;
            var3 = var4.string;
            var2 = _closure1_slot1;
            var1 = 3;
            var1 = var6[var1];
            var2 = var2.bind(var5)(var1);
            var1 = arg1;
            if(var1) { _fun0004_ip = 11; continue _fun0004 }
case 12:
            var1 = var2.SCIaWF;
            var1 = var3.bind(var4)(var1);
            _fun0004_ip = 13; continue _fun0004;
case 11:
            var2 = var2.w7j/Li;
            var1 = var3.bind(var4)(var2);
case 13:
            return var1;
        }
    };
    var9['tooltipDescription'] = var30;
    var30 = function sectionHeader(arg1) {
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 2;
        var2 = var6[var2];
        var5 = undefined;
        var2 = var3.bind(var5)(var2);
        var4 = var2.intl;
        var3 = var4.formatToPlainString;
        var2 = _closure1_slot1;
        var1 = 3;
        var1 = var6[var1];
        var1 = var2.bind(var5)(var1);
        var2 = var1.0GE4Nj;
        var1 = {};
        var5 = arg1;
        var1['count'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var9['sectionHeader'] = var30;
    var30 = function sectionDescription(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 2;
            var2 = var6[var2];
            var5 = undefined;
            var2 = var3.bind(var5)(var2);
            var4 = var2.intl;
            var3 = var4.string;
            var2 = _closure1_slot1;
            var1 = 3;
            var1 = var6[var1];
            var2 = var2.bind(var5)(var1);
            var1 = arg1;
            if(var1) { _fun0005_ip = 11; continue _fun0005 }
case 12:
            var1 = var2.SCIaWF;
            var1 = var3.bind(var4)(var1);
            _fun0005_ip = 13; continue _fun0005;
case 11:
            var2 = var2.w7j/Li;
            var1 = var3.bind(var4)(var2);
case 13:
            return var1;
        }
    };
    var9['sectionDescription'] = var30;
    var30 = function timestampFormatter() {
        var1 = {};
        var7 = _closure1_slot0;
        var5 = _closure1_slot2;
        var6 = 2;
        var3 = var5[var6];
        var4 = undefined;
        var3 = var7.bind(var4)(var3);
        var10 = var3.intl;
        var9 = var10.string;
        var3 = _closure1_slot1;
        var2 = 3;
        var8 = var5[var2];
        var8 = var3.bind(var4)(var8);
        var8 = var8.IHd5cX;
        var8 = var9.bind(var10)(var8);
        var1['today'] = var8;
        var6 = var5[var6];
        var6 = var7.bind(var4)(var6);
        var8 = var6.intl;
        var7 = var8.string;
        var6 = var5[var2];
        var6 = var3.bind(var4)(var6);
        var6 = var6.wOsfxs;
        var6 = var7.bind(var8)(var6);
        var1['yesterday'] = var6;
        var2 = var5[var2];
        var2 = var3.bind(var4)(var2);
        var2 = var2.oCk8c3;
        var1['days'] = var2;
        return var1;
    };
    var9['timestampFormatter'] = var30;
    var7[1] = var9;
    var6[1] = var7;
    var9 = var15.USER_ADD;
    var7 = new Array(2);
    var7[0] = var9;
    var9 = {};
    var30 = 300;
    var9['priority'] = var30;
    var30 = function tooltipHeader() {
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 2;
        var2 = var6[var2];
        var5 = undefined;
        var2 = var3.bind(var5)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var4 = _closure1_slot1;
        var1 = 3;
        var1 = var6[var1];
        var1 = var4.bind(var5)(var1);
        var1 = var1.kIcKAg;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var9['tooltipHeader'] = var30;
    var30 = function tooltipDescription(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 2;
            var2 = var6[var2];
            var5 = undefined;
            var2 = var3.bind(var5)(var2);
            var4 = var2.intl;
            var3 = var4.string;
            var2 = _closure1_slot1;
            var1 = 3;
            var1 = var6[var1];
            var2 = var2.bind(var5)(var1);
            var1 = arg1;
            if(var1) { _fun0006_ip = 11; continue _fun0006 }
case 12:
            var1 = var2.1/QpPz;
            var1 = var3.bind(var4)(var1);
            _fun0006_ip = 13; continue _fun0006;
case 11:
            var2 = var2.HvsFJS;
            var1 = var3.bind(var4)(var2);
case 13:
            return var1;
        }
    };
    var9['tooltipDescription'] = var30;
    var30 = function sectionHeader(arg1) {
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 2;
        var2 = var6[var2];
        var5 = undefined;
        var2 = var3.bind(var5)(var2);
        var4 = var2.intl;
        var3 = var4.formatToPlainString;
        var2 = _closure1_slot1;
        var1 = 3;
        var1 = var6[var1];
        var1 = var2.bind(var5)(var1);
        var2 = var1.TEvo+P;
        var1 = {};
        var5 = arg1;
        var1['count'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var9['sectionHeader'] = var30;
    var30 = function sectionDescription(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 2;
            var2 = var6[var2];
            var5 = undefined;
            var2 = var3.bind(var5)(var2);
            var4 = var2.intl;
            var3 = var4.string;
            var2 = _closure1_slot1;
            var1 = 3;
            var1 = var6[var1];
            var2 = var2.bind(var5)(var1);
            var1 = arg1;
            if(var1) { _fun0007_ip = 11; continue _fun0007 }
case 12:
            var1 = var2.1/QpPz;
            var1 = var3.bind(var4)(var1);
            _fun0007_ip = 13; continue _fun0007;
case 11:
            var2 = var2.HvsFJS;
            var1 = var3.bind(var4)(var2);
case 13:
            return var1;
        }
    };
    var9['sectionDescription'] = var30;
    var30 = function timestampFormatter() {
        var1 = {};
        var7 = _closure1_slot0;
        var5 = _closure1_slot2;
        var6 = 2;
        var3 = var5[var6];
        var4 = undefined;
        var3 = var7.bind(var4)(var3);
        var10 = var3.intl;
        var9 = var10.string;
        var3 = _closure1_slot1;
        var2 = 3;
        var8 = var5[var2];
        var8 = var3.bind(var4)(var8);
        var8 = var8.JUHIYW;
        var8 = var9.bind(var10)(var8);
        var1['today'] = var8;
        var6 = var5[var6];
        var6 = var7.bind(var4)(var6);
        var8 = var6.intl;
        var7 = var8.string;
        var6 = var5[var2];
        var6 = var3.bind(var4)(var6);
        var6 = var6.GiswUV;
        var6 = var7.bind(var8)(var6);
        var1['yesterday'] = var6;
        var2 = var5[var2];
        var2 = var3.bind(var4)(var2);
        var2 = var2.fwQgEx;
        var1['days'] = var2;
        return var1;
    };
    var9['timestampFormatter'] = var30;
    var7[1] = var9;
    var6[2] = var7;
    var9 = var15.GUILD_ADD;
    var7 = new Array(2);
    var7[0] = var9;
    var9 = {};
    var30 = 400;
    var9['priority'] = var30;
    var30 = function tooltipHeader() {
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 2;
        var2 = var6[var2];
        var5 = undefined;
        var2 = var3.bind(var5)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var4 = _closure1_slot1;
        var1 = 3;
        var1 = var6[var1];
        var1 = var4.bind(var5)(var1);
        var1 = var1.NulX9/;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var9['tooltipHeader'] = var30;
    var30 = function tooltipDescription(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 2;
            var2 = var6[var2];
            var5 = undefined;
            var2 = var3.bind(var5)(var2);
            var4 = var2.intl;
            var3 = var4.string;
            var2 = _closure1_slot1;
            var1 = 3;
            var1 = var6[var1];
            var2 = var2.bind(var5)(var1);
            var1 = arg1;
            if(var1) { _fun0008_ip = 11; continue _fun0008 }
case 12:
            var1 = var2.MTFxYW;
            var1 = var3.bind(var4)(var1);
            _fun0008_ip = 13; continue _fun0008;
case 11:
            var2 = var2.Lmz9Vl;
            var1 = var3.bind(var4)(var2);
case 13:
            return var1;
        }
    };
    var9['tooltipDescription'] = var30;
    var30 = function sectionHeader(arg1) {
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 2;
        var2 = var6[var2];
        var5 = undefined;
        var2 = var3.bind(var5)(var2);
        var4 = var2.intl;
        var3 = var4.formatToPlainString;
        var2 = _closure1_slot1;
        var1 = 3;
        var1 = var6[var1];
        var1 = var2.bind(var5)(var1);
        var2 = var1.7feG7e;
        var1 = {};
        var5 = arg1;
        var1['count'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var9['sectionHeader'] = var30;
    var30 = function sectionDescription(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 2;
            var2 = var6[var2];
            var5 = undefined;
            var2 = var3.bind(var5)(var2);
            var4 = var2.intl;
            var3 = var4.string;
            var2 = _closure1_slot1;
            var1 = 3;
            var1 = var6[var1];
            var2 = var2.bind(var5)(var1);
            var1 = arg1;
            if(var1) { _fun0009_ip = 11; continue _fun0009 }
case 12:
            var1 = var2.MTFxYW;
            var1 = var3.bind(var4)(var1);
            _fun0009_ip = 13; continue _fun0009;
case 11:
            var2 = var2.Lmz9Vl;
            var1 = var3.bind(var4)(var2);
case 13:
            return var1;
        }
    };
    var9['sectionDescription'] = var30;
    var7[1] = var9;
    var6[3] = var7;
    var9 = var15.GUILD_INTERACTION;
    var7 = new Array(2);
    var7[0] = var9;
    var9 = {};
    var30 = 500;
    var9['priority'] = var30;
    var30 = function tooltipHeader() {
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 2;
        var2 = var6[var2];
        var5 = undefined;
        var2 = var3.bind(var5)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var4 = _closure1_slot1;
        var1 = 3;
        var1 = var6[var1];
        var1 = var4.bind(var5)(var1);
        var1 = var1.CcrbCw;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var9['tooltipHeader'] = var30;
    var9['tooltipDescription'] = var29;
    var30 = function sectionHeader(arg1) {
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 2;
        var2 = var6[var2];
        var5 = undefined;
        var2 = var3.bind(var5)(var2);
        var4 = var2.intl;
        var3 = var4.formatToPlainString;
        var2 = _closure1_slot1;
        var1 = 3;
        var1 = var6[var1];
        var1 = var2.bind(var5)(var1);
        var2 = var1.rcPInZ;
        var1 = {};
        var5 = arg1;
        var1['count'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var9['sectionHeader'] = var30;
    var9['sectionDescription'] = var29;
    var7[1] = var9;
    var6[4] = var7;
    var7 = var8.prototype;
    var7 = Object.create(var7, {constructor: {value: var8}});
    var35 = var7;
    var34 = var6;
    var6 = new var35[var8](var34, var33);
    var9 = var6 instanceof Object ? var6 : var7;
    var7 = var4.Map;
    var4 = var15.TOTAL_VOICE_MINUTES;
    var6 = new Array(2);
    var6[0] = var4;
    var4 = {};
    var8 = 175;
    var4['priority'] = var8;
    var8 = function tooltipHeader() {
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 2;
        var2 = var6[var2];
        var5 = undefined;
        var2 = var3.bind(var5)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var4 = _closure1_slot1;
        var1 = 3;
        var1 = var6[var1];
        var1 = var4.bind(var5)(var1);
        var1 = var1.eo4Fxs;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var4['tooltipHeader'] = var8;
    var8 = function tooltipDescription(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 2;
            var2 = var6[var2];
            var5 = undefined;
            var2 = var3.bind(var5)(var2);
            var4 = var2.intl;
            var3 = var4.string;
            var2 = _closure1_slot1;
            var1 = 3;
            var1 = var6[var1];
            var2 = var2.bind(var5)(var1);
            var1 = arg1;
            if(var1) { _fun0010_ip = 11; continue _fun0010 }
case 12:
            var1 = var2.n3otj4;
            var1 = var3.bind(var4)(var1);
            _fun0010_ip = 13; continue _fun0010;
case 11:
            var2 = var2.Mx+/eX;
            var1 = var3.bind(var4)(var2);
case 13:
            return var1;
        }
    };
    var4['tooltipDescription'] = var8;
    var8 = function sectionHeader(arg1) {
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 2;
        var2 = var6[var2];
        var5 = undefined;
        var2 = var3.bind(var5)(var2);
        var4 = var2.intl;
        var3 = var4.formatToPlainString;
        var2 = _closure1_slot1;
        var1 = 3;
        var1 = var6[var1];
        var1 = var2.bind(var5)(var1);
        var2 = var1.eGFWUV;
        var1 = {};
        var5 = arg1;
        var1['count'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4['sectionHeader'] = var8;
    var8 = function sectionDescription(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 2;
            var2 = var6[var2];
            var5 = undefined;
            var2 = var3.bind(var5)(var2);
            var4 = var2.intl;
            var3 = var4.string;
            var2 = _closure1_slot1;
            var1 = 3;
            var1 = var6[var1];
            var2 = var2.bind(var5)(var1);
            var1 = arg1;
            if(var1) { _fun0011_ip = 11; continue _fun0011 }
case 12:
            var1 = var2.n3otj4;
            var1 = var3.bind(var4)(var1);
            _fun0011_ip = 13; continue _fun0011;
case 11:
            var2 = var2.Mx+/eX;
            var1 = var3.bind(var4)(var2);
case 13:
            return var1;
        }
    };
    var4['sectionDescription'] = var8;
    var6[1] = var4;
    var4 = new Array(2);
    var4[0] = var6;
    var8 = var15.PURCHASES;
    var6 = new Array(2);
    var6[0] = var8;
    var8 = {};
    var29 = 150;
    var8['priority'] = var29;
    var29 = function tooltipHeader() {
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 2;
        var2 = var6[var2];
        var5 = undefined;
        var2 = var3.bind(var5)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var4 = _closure1_slot1;
        var1 = 3;
        var1 = var6[var1];
        var1 = var4.bind(var5)(var1);
        var1 = var1.NMYKsr;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var8['tooltipHeader'] = var29;
    var29 = function tooltipDescription(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 2;
            var2 = var6[var2];
            var5 = undefined;
            var2 = var3.bind(var5)(var2);
            var4 = var2.intl;
            var3 = var4.string;
            var2 = _closure1_slot1;
            var1 = 3;
            var1 = var6[var1];
            var2 = var2.bind(var5)(var1);
            var1 = arg1;
            if(var1) { _fun0012_ip = 11; continue _fun0012 }
case 12:
            var1 = var2.85PtWl;
            var1 = var3.bind(var4)(var1);
            _fun0012_ip = 14; continue _fun0012;
case 11:
            var2 = var2.c9BHsr;
            var1 = var3.bind(var4)(var2);
case 14:
            return var1;
        }
    };
    var8['tooltipDescription'] = var29;
    var29 = function sectionHeader(arg1) {
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 2;
        var2 = var6[var2];
        var5 = undefined;
        var2 = var3.bind(var5)(var2);
        var4 = var2.intl;
        var3 = var4.formatToPlainString;
        var2 = _closure1_slot1;
        var1 = 3;
        var1 = var6[var1];
        var1 = var2.bind(var5)(var1);
        var2 = var1.FPViWF;
        var1 = {};
        var5 = arg1;
        var1['amount'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var8['sectionHeader'] = var29;
    var29 = function sectionDescription(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 2;
            var2 = var6[var2];
            var5 = undefined;
            var2 = var3.bind(var5)(var2);
            var4 = var2.intl;
            var3 = var4.string;
            var2 = _closure1_slot1;
            var1 = 3;
            var1 = var6[var1];
            var2 = var2.bind(var5)(var1);
            var1 = arg1;
            if(var1) { _fun0013_ip = 11; continue _fun0013 }
case 12:
            var1 = var2.85PtWl;
            var1 = var3.bind(var4)(var1);
            _fun0013_ip = 14; continue _fun0013;
case 11:
            var2 = var2.cqIdqa;
            var1 = var3.bind(var4)(var2);
case 14:
            return var1;
        }
    };
    var8['sectionDescription'] = var29;
    var6[1] = var8;
    var4[1] = var6;
    var6 = var7.prototype;
    var6 = Object.create(var6, {constructor: {value: var7}});
    var35 = var6;
    var34 = var4;
    var4 = new var35[var7](var34, var33);
    var8 = var4 instanceof Object ? var4 : var6;
    var7 = {};
    var7['CHECK'] = var28;
    var4 = 'CHECK';
    var7[var28] = var4;
    var7['X'] = var27;
    var4 = 'X';
    var7[var27] = var4;
    var6 = {};
    var6['GENERIC_ERROR'] = var28;
    var4 = 'GENERIC_ERROR';
    var6[var28] = var4;
    var6['INELIGIBLE_FOR_FAMILY_CENTER'] = var27;
    var4 = 'INELIGIBLE_FOR_FAMILY_CENTER';
    var6[var27] = var4;
    var6['PENDING_REQUEST_EXISTS'] = var5;
    var4 = 'PENDING_REQUEST_EXISTS';
    var6[var5] = var4;
    var6['MAX_CONNECTIONS_REACHED'] = var22;
    var4 = 'MAX_CONNECTIONS_REACHED';
    var6[var22] = var4;
    var5 = {};
    var4 = var6.INELIGIBLE_FOR_FAMILY_CENTER;
    var5[290000] = var4;
    var4 = var6.MAX_CONNECTIONS_REACHED;
    var5[290002] = var4;
    var4 = var6.PENDING_REQUEST_EXISTS;
    var5[290005] = var4;
    var4 = {};
    var28 = var6.GENERIC_ERROR;
    var27 = {};
    var29 = function header() {
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 2;
        var2 = var6[var2];
        var5 = undefined;
        var2 = var3.bind(var5)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var4 = _closure1_slot1;
        var1 = 3;
        var1 = var6[var1];
        var1 = var4.bind(var5)(var1);
        var1 = var1.nGX8Cg;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var27['header'] = var29;
    var29 = function description() {
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 2;
        var2 = var6[var2];
        var5 = undefined;
        var2 = var3.bind(var5)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var4 = _closure1_slot1;
        var1 = 3;
        var1 = var6[var1];
        var1 = var4.bind(var5)(var1);
        var1 = var1.Uss2dn;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var27['description'] = var29;
    var29 = var7.X;
    var27['icon'] = var29;
    var4[var28] = var27;
    var28 = var6.PENDING_REQUEST_EXISTS;
    var27 = {};
    var29 = function header() {
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 2;
        var2 = var6[var2];
        var5 = undefined;
        var2 = var3.bind(var5)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var4 = _closure1_slot1;
        var1 = 3;
        var1 = var6[var1];
        var1 = var4.bind(var5)(var1);
        var1 = var1.tu0MRk;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var27['header'] = var29;
    var29 = function description(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var6 = var1.email;
            var1 = null;
            if(!(var1 == var6)) { _fun0014_ip = 13; continue _fun0014 }
case 15:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 2;
            var2 = var7[var2];
            var5 = undefined;
            var2 = var3.bind(var5)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var4 = _closure1_slot1;
            var1 = 3;
            var1 = var7[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.Xyjnws;
            var1 = var2.bind(var3)(var1);
            _fun0014_ip = 16; continue _fun0014;
case 13:
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 2;
            var3 = var8[var3];
            var7 = undefined;
            var3 = var4.bind(var7)(var3);
            var5 = var3.intl;
            var4 = var5.formatToPlainString;
            var3 = _closure1_slot1;
            var2 = 3;
            var2 = var8[var2];
            var2 = var3.bind(var7)(var2);
            var3 = var2.xNEkd3;
            var2 = {};
            var2['email'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 16:
            return var1;
        }
    };
    var27['description'] = var29;
    var29 = var7.CHECK;
    var27['icon'] = var29;
    var4[var28] = var27;
    var28 = var6.MAX_CONNECTIONS_REACHED;
    var27 = {};
    var29 = function header(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var1 = var1.isAdult;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 2;
            var3 = var7[var3];
            var6 = undefined;
            var3 = var4.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var5 = _closure1_slot1;
            var2 = 3;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            if(var1) { _fun0015_ip = 4; continue _fun0015 }
case 5:
            var1 = var2.MzX4RE;
            var1 = var3.bind(var4)(var1);
            _fun0015_ip = 6; continue _fun0015;
case 4:
            var2 = var2.bS5x9/;
            var1 = var3.bind(var4)(var2);
case 6:
            return var1;
        }
    };
    var27['header'] = var29;
    var29 = function description(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var1 = var1.isAdult;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 2;
            var3 = var7[var3];
            var6 = undefined;
            var3 = var4.bind(var6)(var3);
            var5 = var3.intl;
            var4 = var5.format;
            var3 = _closure1_slot1;
            var2 = 3;
            var2 = var7[var2];
            var2 = var3.bind(var6)(var2);
            if(var1) { _fun0016_ip = 17; continue _fun0016 }
case 5:
            var3 = var2.69F+eX;
            var1 = {};
            var6 = 'https://support.discord.com/hc/articles/14155060633623';
            var1['link'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0016_ip = 18; continue _fun0016;
case 17:
            var3 = var2.GKzqWl;
            var2 = {};
            var6 = 'https://support.discord.com/hc/articles/14155043715735';
            var2['link'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 18:
            return var1;
        }
    };
    var27['description'] = var29;
    var29 = var7.X;
    var27['icon'] = var29;
    var4[var28] = var27;
    var28 = var6.INELIGIBLE_FOR_FAMILY_CENTER;
    var27 = {};
    var29 = function header() {
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 2;
        var2 = var6[var2];
        var5 = undefined;
        var2 = var3.bind(var5)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var4 = _closure1_slot1;
        var1 = 3;
        var1 = var6[var1];
        var1 = var4.bind(var5)(var1);
        var1 = var1.W9JLJi;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var27['header'] = var29;
    var29 = function description() {
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 2;
        var2 = var6[var2];
        var5 = undefined;
        var2 = var3.bind(var5)(var2);
        var4 = var2.intl;
        var3 = var4.format;
        var2 = _closure1_slot1;
        var1 = 3;
        var1 = var6[var1];
        var1 = var2.bind(var5)(var1);
        var2 = var1.On5iRE;
        var1 = {};
        var5 = 'https://support.discord.com/hc/requests/new?ticket_form_id=360000029731';
        var1['link'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var27['description'] = var29;
    var29 = var7.X;
    var27['icon'] = var29;
    var4[var28] = var27;
    var25 = var25[var21];
    var27 = var26.bind(var1)(var25);
    var26 = var27.fileFinishedImporting;
    var25 = 'modules/parent_tools/FamilyCenterConstants.tsx';
    var25 = var26.bind(var27)(var25);
    var3['FAMILY_CENTER_REFETCH_COOLDOWN'] = var24;
    var3['MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS'] = var23;
    var3['MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS'] = var22;
    var22 = 26;
    var3['FAMILY_CENTER_REQUEST_SECTION_HEIGHT'] = var22;
    var22 = 64;
    var3['FAMILY_CENTER_REQUEST_ROW_HEIGHT'] = var22;
    var22 = /\\/feature\\/family-center\\/my-family\\/(\w+)\\/(\w+)/;
    var3['FAMILY_CENTER_LINK_REQUEST_REGEX'] = var22;
    var22 = function(arg1, arg2) {
        var1 = global;
        var1 = var1.HermesInternal;
        var5 = var1.concat;
        var4 = 'https://discord.com/feature/family-center/my-family/';
        var3 = arg1;
        var2 = '/';
        var1 = arg2;
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var3['FAMILY_CENTER_REQUEST_QR_CODE_URL'] = var22;
    var3['FAMILY_CENTER_ITEMS_SHOWN_INCREMENTS'] = var21;
    var3['QR_CODE_AUTO_HIDE_TIMEOUT'] = var20;
    var20 = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    var3['PLACEHOLDER_QR_CODE_URL'] = var20;
    var3['FAMILY_CENTER_SUB_ROUTES'] = var19;
    var3['TeenActionType'] = var18;
    var3['UserLinkType'] = var17;
    var3['UserLinkStatus'] = var16;
    var3['TeenActionDisplayType'] = var15;
    var3['FamilyCenterSubPages'] = var14;
    var3['FamilyCenterSubPageAnalyticsIds'] = var13;
    var3['FamilyCenterPageLocation'] = var12;
    var3['FamilyCenterPageLocationAnalyticsIds'] = var11;
    var3['FamilyCenterAction'] = var10;
    var3['ACTION_TO_TEXT'] = var9;
    var3['ACTION_TO_TEXT_V2'] = var8;
    var3['FamilyCenterIconType'] = var7;
    var3['FamilyCenterFailureCode'] = var6;
    var3['FAMILY_CENTER_ERROR_CODE_TO_FAILURE'] = var5;
    var3['FAMILY_CENTER_LINK_REQUEST_ERROR_EXPERIENCES'] = var4;
    var4 = function() {
        var1 = {};
        var7 = _closure1_slot0;
        var5 = _closure1_slot2;
        var6 = 2;
        var3 = var5[var6];
        var4 = undefined;
        var3 = var7.bind(var4)(var3);
        var10 = var3.intl;
        var9 = var10.string;
        var3 = _closure1_slot1;
        var2 = 3;
        var8 = var5[var2];
        var8 = var3.bind(var4)(var8);
        var8 = var8.CJdoeX;
        var8 = var9.bind(var10)(var8);
        var1['seconds'] = var8;
        var8 = var5[var2];
        var8 = var3.bind(var4)(var8);
        var8 = var8.InzMn5;
        var1['minutes'] = var8;
        var8 = var5[var2];
        var8 = var3.bind(var4)(var8);
        var8 = var8.ErkYCA;
        var1['hours'] = var8;
        var6 = var5[var6];
        var6 = var7.bind(var4)(var6);
        var8 = var6.intl;
        var7 = var8.string;
        var6 = var5[var2];
        var6 = var3.bind(var4)(var6);
        var6 = var6.GvfssL;
        var6 = var7.bind(var8)(var6);
        var1['yesterday'] = var6;
        var6 = var5[var2];
        var6 = var3.bind(var4)(var6);
        var6 = var6.pWig19;
        var1['days'] = var6;
        var2 = var5[var2];
        var2 = var3.bind(var4)(var2);
        var2 = var2.MP3kho;
        var1['date'] = var2;
        return var1;
    };
    var3['PENDING_LINK_REQUEST_TIMESTAMP_FORMATTER'] = var4;
    var2 = function() {
        var1 = {};
        var7 = _closure1_slot0;
        var5 = _closure1_slot2;
        var6 = 2;
        var3 = var5[var6];
        var4 = undefined;
        var3 = var7.bind(var4)(var3);
        var10 = var3.intl;
        var9 = var10.string;
        var3 = _closure1_slot1;
        var2 = 3;
        var8 = var5[var2];
        var8 = var3.bind(var4)(var8);
        var8 = var8.BqsamZ;
        var8 = var9.bind(var10)(var8);
        var1['seconds'] = var8;
        var8 = var5[var2];
        var8 = var3.bind(var4)(var8);
        var8 = var8.kX3wJi;
        var1['minutes'] = var8;
        var8 = var5[var2];
        var8 = var3.bind(var4)(var8);
        var8 = var8.J18GbG;
        var1['hours'] = var8;
        var6 = var5[var6];
        var6 = var7.bind(var4)(var6);
        var8 = var6.intl;
        var7 = var8.string;
        var6 = var5[var2];
        var6 = var3.bind(var4)(var6);
        var6 = var6.Ln9zMj;
        var6 = var7.bind(var8)(var6);
        var1['yesterday'] = var6;
        var6 = var5[var2];
        var6 = var3.bind(var4)(var6);
        var6 = var6.WRtyS0;
        var1['days'] = var6;
        var2 = var5[var2];
        var2 = var3.bind(var4)(var2);
        var2 = var2.Y3ZYtL;
        var1['date'] = var2;
        return var1;
    };
    var3['ACCEPTED_LINK_REQUEST_TIMESTAMP_FORMATTER'] = var2;
    return var1;
})();