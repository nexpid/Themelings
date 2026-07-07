// app/modules/connections/native/GuildRoleConnectionsConnectAccountsActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var16 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var16;
    var _closure1_slot2 = var6;
    var1 = function PlatformIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var6 = var1.platformType;
            var2 = _closure1_slot32;
            var4 = undefined;
            var5 = var2.bind(var4)();
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 17;
            var2 = var10[var2];
            var2 = var3.bind(var4)(var2);
            var9 = var2.bind(var4)();
            var2 = 18;
            var2 = var10[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.get;
            var7 = var2.bind(var3)(var6);
            var8 = _closure1_slot0;
            var2 = 19;
            var2 = var10[var2];
            var6 = var8.bind(var4)(var2);
            var3 = var6.makeSource;
            var2 = 20;
            var2 = var10[var2];
            var8 = var8.bind(var4)(var2);
            var2 = var8.isThemeLight;
            var2 = var2.bind(var8)(var9);
            var7 = var7.icon;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var7.darkPNG;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var2 = var7.lightPNG;
case 4:
            var6 = var3.bind(var6)(var2);
            var3 = _closure1_slot29;
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 21;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Icon;
            var1 = {};
            var1['source'] = var6;
            var5 = var5.platformIcon;
            var1['style'] = var5;
            var5 = true;
            var1['disableColor'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot34 = var1;
    var1 = function ChannelName(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = var1.channel;
            var7 = var1.style;
            var1 = _closure1_slot32;
            var4 = undefined;
            var10 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 22;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.getChannelIcon;
            var12 = var1.bind(var3)(var2);
            var3 = _closure1_slot1;
            var1 = 23;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var9 = var1.bind(var4)(var2);
            var3 = _closure1_slot30;
            var2 = _closure1_slot8;
            var1 = {};
            var8 = var10.channelName;
            var5 = new Array(2);
            var5[0] = var8;
            var5[1] = var7;
            var1['style'] = var5;
            var7 = null;
            var5 = var7 != var12;
            if(!var5) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var11 = _closure1_slot29;
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 21;
            var5 = var13[var5];
            var5 = var8.bind(var4)(var5);
            var8 = var5.Icon;
            var5 = {};
            var5['source'] = var12;
            var12 = var10.channelNameIcon;
            var5['style'] = var12;
            var7 = var11.bind(var4)(var8, var5);
case 5:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot29;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 24;
            var6 = var11[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'heading-lg/semibold', 'color': 'text-default', 'style': null, 'lineClamp': 1};
            var10 = var10.channelNameText;
            var6['style'] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot35 = var1;
    var1 = function ConnectionsCheck(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var14 = var1.connectionType;
            var13 = var1.connectionMetadataField;
            var4 = var1.operator;
            var12 = var1.value;
            var9 = var1.result;
            var11 = var1.description;
            var1 = _closure1_slot32;
            var5 = undefined;
            var7 = var1.bind(var5)();
            var1 = _closure1_slot20;
            if(!(var14 !== var1)) { _fun0003_ip = 7; continue _fun0003 }
case 8:
            var1 = null;
            if(!(var1 == var11)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
            var3 = _closure1_slot18;
            var3 = var3.EQUAL;
            if(!(var3 !== var4)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var3 = _closure1_slot18;
            var3 = var3.NOT_EQUAL;
            if(!(var3 !== var4)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var3 = _closure1_slot18;
            var3 = var3.LESS_THAN;
            if(!(var3 !== var4)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var3 = _closure1_slot18;
            var3 = var3.GREATER_THAN;
            if(!(var3 !== var4)) { _fun0003_ip = 17; continue _fun0003 }
case 2:
            if(!(var5 !== var4)) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var10 = undefined;
            if(!(var1 === var4)) { _fun0003_ip = 20; continue _fun0003 }
case 18:
            return var1;
case 17:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 25;
            var3 = var8[var3];
            var3 = var6.bind(var5)(var3);
            var3 = var3.t;
            var10 = var3["8W9OXU"];
            _fun0003_ip = 20; continue _fun0003;
case 15:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 25;
            var3 = var8[var3];
            var3 = var6.bind(var5)(var3);
            var3 = var3.t;
            var10 = var3.Ef35xs;
            _fun0003_ip = 20; continue _fun0003;
case 13:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 25;
            var3 = var8[var3];
            var3 = var6.bind(var5)(var3);
            var3 = var3.t;
            var10 = var3.otcpTN;
            _fun0003_ip = 20; continue _fun0003;
case 11:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var8 = 25;
            var3 = var3[var8];
            var3 = var6.bind(var5)(var3);
            var3 = var3.t;
            var6 = var3["0BlpbA"];
            var3 = _closure1_slot21;
            var3 = var3.PAYPAL;
            var3 = var14 === var3;
            if(!var3) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var15 = _closure1_slot17;
            var15 = var15.PAYPAL_VERIFIED;
            var3 = var13 === var15;
case 21:
            var10 = var6;
            if(!var3) { _fun0003_ip = 20; continue _fun0003 }
case 23:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var3 = var6.bind(var5)(var3);
            var3 = var3.t;
            var10 = var3.dcSDhW;
case 20:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 26;
            var3 = var8[var3];
            var8 = var6.bind(var5)(var3);
            var6 = var8.getConnectionsCheckText;
            var3 = {};
            var3['connectionType'] = var14;
            var3['connectionMetadataField'] = var13;
            var3['operator'] = var4;
            var3['operatorText'] = var10;
            var3['value'] = var12;
            var6 = var6.bind(var8)(var3);
            _fun0003_ip = 24; continue _fun0003;
case 9:
            var3 = _closure1_slot18;
            var3 = var3.LESS_THAN;
            if(!(var3 !== var4)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var3 = _closure1_slot18;
            var3 = var3.GREATER_THAN;
            var6 = var11;
            if(!(var3 === var4)) { _fun0003_ip = 24; continue _fun0003 }
case 27:
            var4 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 25;
            var8 = var13[var3];
            var8 = var4.bind(var5)(var8);
            var10 = var8.intl;
            var8 = var10.format;
            var3 = var13[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.t;
            var4 = var3["2p7dA3"];
            var3 = {};
            var3['description'] = var11;
            var13 = global;
            var16 = var13.Math;
            var15 = var16.max;
            var13 = var13.Number;
            var14 = var13.bind(var5)(var12);
            var13 = 1;
            var14 = var14 + var13;
            var13 = 0;
            var13 = var15.bind(var16)(var13, var14);
            var3['count'] = var13;
            var6 = var8.bind(var10)(var4, var3);
            _fun0003_ip = 24; continue _fun0003;
case 25:
            var4 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 25;
            var8 = var13[var3];
            var8 = var4.bind(var5)(var8);
            var10 = var8.intl;
            var8 = var10.format;
            var3 = var13[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.t;
            var4 = var3["2p7dA3"];
            var3 = {};
            var3['description'] = var11;
            var11 = global;
            var14 = var11.Math;
            var13 = var14.max;
            var11 = var11.Number;
            var12 = var11.bind(var5)(var12);
            var11 = 1;
            var12 = var12 - var11;
            var11 = 0;
            var11 = var13.bind(var14)(var11, var12);
            var3['count'] = var11;
            var6 = var8.bind(var10)(var4, var3);
case 24:
            var3 = var1 == var6;
            var1 = null;
            if(var3) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var4 = _closure1_slot29;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 24;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.Text;
            var2 = {};
            var8 = 'text-xs/normal';
            var2['variant'] = var8;
            var8 = 'text-feedback-critical';
            if(!var9) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            var8 = 'text-default';
case 30:
            var2['color'] = var8;
            var7 = var7.connectionsCheck;
            var2['style'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 28:
            return var1;
case 7:
            var1 = null;
            return var1;
        }
    };
    var _closure1_slot36 = var1;
    var1 = function IdentityConnectionsCheckGroup(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var9 = var2.eligibilityState;
            var _closure2_slot0 = var9;
            var11 = var2.onAttempted;
            var _closure2_slot1 = var11;
            var10 = var2.onIdentityAuthorize;
            var _closure2_slot2 = var10;
            var5 = undefined;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var2 = _closure1_slot32;
            var16 = var2.bind(var5)();
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 27;
            var2 = var6[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.useGetOrFetchApplicationBatched;
            var2 = var9.application_id;
            var3 = var3.bind(var4)(var2);
            var4 = _closure1_slot1;
            var2 = 28;
            var2 = var6[var2];
            var2 = var4.bind(var5)(var2);
            var2 = var2.bind(var5)(var3);
            var13 = var2.canStartAuthorization;
            var _closure2_slot3 = var13;
            var12 = var2.startAuthorization;
            var _closure2_slot4 = var12;
            var _closure2_slot5 = var13;
            var8 = var9.identity_connected_account_type;
            var _closure2_slot6 = var8;
            var6 = var9.identity_auth_required_scopes;
            var _closure2_slot7 = var6;
            var18 = var13;
            if(var18) { _fun0004_ip = 32; continue _fun0004 }
case 33:
            var2 = null;
            var18 = var13;
            if(!(var2 != var8)) { _fun0004_ip = 32; continue _fun0004 }
case 34:
            var18 = var13;
            if(!(var2 != var6)) { _fun0004_ip = 32; continue _fun0004 }
case 15:
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 18;
            var3 = var7[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.get;
            var3 = var3.bind(var4)(var8);
            var2 = var2 != var3;
            if(!var2) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var2 = var3.enabled;
case 35:
            var18 = var13;
            if(!var2) { _fun0004_ip = 32; continue _fun0004 }
case 37:
            var2 = true;
            _closure2_slot5 = var2;
            var18 = true;
case 32:
            var25 = var9.application;
            _closure2_slot8 = var25;
            var7 = _closure1_slot5;
            var4 = var7.useMemo;
            var3 = new Array(1);
            var3[0] = var25;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot8;
                    var1 = null;
                    var4 = var1 == var3;
                    var3 = undefined;
                    if(var4) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                    var4 = _closure2_slot8;
                    var3 = var4.bot;
case 38:
                    var3 = var1 != var3;
                    var1 = null;
                    if(!var3) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                    var4 = _closure1_slot10;
                    var2 = _closure2_slot8;
                    var5 = var2.bot;
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {constructor: {value: var4}});
                    var6 = var3;
                    var2 = new var6[var4](var5, var4);
                    var1 = var2 instanceof Object ? var2 : var3;
case 40:
                    return var1;
                }
            };
            var19 = var4.bind(var7)(var2, var3);
            var15 = var9.result;
            _closure2_slot9 = var15;
            var17 = null;
            var2 = var17 != var19;
            var21 = undefined;
            if(!var2) { _fun0004_ip = 20; continue _fun0004 }
case 42:
            var4 = _closure1_slot29;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 29;
            var2 = var7[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var7 = var16.botTag;
            var2['style'] = var7;
            var7 = var19.isVerifiedBot;
            var7 = var7.bind(var19)();
            var2['verified'] = var7;
            var21 = var4.bind(var5)(var3, var2);
case 20:
            var4 = _closure1_slot29;
            var3 = _closure1_slot0;
            var23 = _closure1_slot2;
            if(var15) { _fun0004_ip = 43; continue _fun0004 }
case 44:
            if(var18) { _fun0004_ip = 45; continue _fun0004 }
case 46:
            var2 = 24;
            var2 = var23[var2];
            var2 = var3.bind(var5)(var2);
            var7 = var2.Text;
            var2 = {'variant': 'text-md/medium', 'color': 'text-muted'};
            var20 = 25;
            var22 = var23[var20];
            var22 = var3.bind(var5)(var22);
            var24 = var22.intl;
            var22 = var24.string;
            var20 = var23[var20];
            var20 = var3.bind(var5)(var20);
            var20 = var20.t;
            var20 = var20.cEts68;
            var20 = var22.bind(var24)(var20);
            var2['children'] = var20;
            var7 = var4.bind(var5)(var7, var2);
            _fun0004_ip = 47; continue _fun0004;
case 45:
            var2 = 21;
            var2 = var23[var2];
            var2 = var3.bind(var5)(var2);
            var20 = var2.Icon;
            var2 = {};
            var24 = _closure1_slot1;
            var22 = 31;
            var22 = var23[var22];
            var22 = var24.bind(var5)(var22);
            var2['source'] = var22;
            var22 = var16.connectionsChecksGroupCaret;
            var2['style'] = var22;
            var7 = var4.bind(var5)(var20, var2);
case 47:
            _fun0004_ip = 48; continue _fun0004;
case 43:
            var2 = 21;
            var2 = var23[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.Icon;
            var2 = {};
            var22 = _closure1_slot1;
            var20 = 30;
            var20 = var23[var20];
            var20 = var22.bind(var5)(var20);
            var2['source'] = var20;
            var20 = var16.connectionsChecksGroupCheckmark;
            var2['style'] = var20;
            var7 = var4.bind(var5)(var3, var2);
case 48:
            var4 = _closure1_slot5;
            var3 = var4.useCallback;
            var2 = new Array(10);
            var2[0] = var15;
            var2[1] = var18;
            var2[2] = var13;
            var2[3] = var12;
            var2[4] = var11;
            var2[5] = var10;
            var10 = var9.connection_type;
            var2[6] = var10;
            var9 = var9.application_id;
            var2[7] = var9;
            var2[8] = var8;
            var2[9] = var6;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot9;
                    if(var2) { _fun0006_ip = 49; continue _fun0006 }
case 50:
                    var2 = _closure2_slot5;
                    if(!var2) { _fun0006_ip = 49; continue _fun0006 }
case 51:
                    var2 = _closure2_slot6;
                    var6 = null;
                    var5 = var6 != var2;
                    if(!var5) { _fun0006_ip = 52; continue _fun0006 }
case 53:
                    var3 = _closure1_slot14;
                    var2 = var3.getAccounts;
                    var4 = var2.bind(var3)();
                    var3 = var4.some;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.type;
                        var1 = _closure2_slot6;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var5 = var3.bind(var4)(var2);
case 52:
                    var7 = _closure2_slot1;
                    var4 = null;
                    if(var5) { _fun0006_ip = 54; continue _fun0006 }
case 55:
                    var2 = _closure2_slot0;
                    var4 = var2.connection_type;
case 54:
                    var2 = _closure2_slot0;
                    var3 = var2.application_id;
                    var8 = var6 != var3;
                    var2 = null;
                    if(!var8) { _fun0006_ip = 56; continue _fun0006 }
case 57:
                    var2 = var3;
case 56:
                    var3 = undefined;
                    var2 = var7.bind(var3)(var4, var2);
                    var2 = _closure2_slot3;
                    if(var2) { _fun0006_ip = 58; continue _fun0006 }
case 2:
                    var2 = _closure2_slot6;
                    var2 = var6 != var2;
                    if(!var2) { _fun0006_ip = 59; continue _fun0006 }
case 60:
                    var4 = _closure2_slot7;
                    var2 = var6 != var4;
case 59:
                    if(!var2) { _fun0006_ip = 61; continue _fun0006 }
case 62:
                    var4 = _closure2_slot0;
                    var4 = var4.application_id;
                    var2 = var6 != var4;
case 61:
                    if(!var2) { _fun0006_ip = 49; continue _fun0006 }
case 63:
                    var4 = _closure2_slot2;
                    var2 = {};
                    var6 = _closure2_slot0;
                    var6 = var6.application_id;
                    var2['applicationId'] = var6;
                    var6 = _closure2_slot7;
                    var2['scopes'] = var6;
                    var6 = _closure2_slot6;
                    var2['connectedAccountProvider'] = var6;
                    var2['wasAlreadyConnected'] = var5;
                    var2 = var4.bind(var3)(var2);
                    _fun0006_ip = 49; continue _fun0006;
case 58:
                    var2 = _closure2_slot4;
                    var1 = {};
                    var4 = ['Verified Roles Connect Accounts Modal'];
                    var1['analyticsLocations'] = var4;
                    var1 = var2.bind(var3)(var1);
case 49:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var3.bind(var4)(var1, var2);
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 26;
            var1 = var3[var1];
            var1 = var2.bind(var5)(var1);
            var3 = var1.officialApplicationIds;
            var2 = var3.includes;
            var1 = var17 == var25;
            var4 = undefined;
            if(var1) { _fun0004_ip = 64; continue _fun0004 }
case 65:
            var4 = var25.id;
case 64:
            var8 = var17 != var4;
            var1 = '';
            if(!var8) { _fun0004_ip = 66; continue _fun0004 }
case 67:
            var1 = var4;
case 66:
            var2 = var2.bind(var3)(var1);
            var1 = null;
            if(var2) { _fun0004_ip = 68; continue _fun0004 }
case 69:
            var4 = _closure1_slot30;
            var3 = _closure1_slot7;
            var2 = {};
            var8 = 'button';
            var2['accessibilityRole'] = var8;
            var9 = var16.connectionsChecksGroup;
            var8 = new Array(3);
            var8[0] = var9;
            var9 = null;
            if(!var15) { _fun0004_ip = 70; continue _fun0004 }
case 71:
            var9 = var16.connectionsChecksGroupPassed;
case 70:
            var8[1] = var9;
            var9 = null;
            if(var18) { _fun0004_ip = 72; continue _fun0004 }
case 73:
            var9 = var16.connectionsChecksGroupPlatformDisabled;
case 72:
            var8[2] = var9;
            var2['style'] = var8;
            var8 = var15;
            if(var8) { _fun0004_ip = 74; continue _fun0004 }
case 75:
            var8 = !var18;
case 74:
            var2['disabled'] = var8;
            var2['onPress'] = var6;
            var6 = var17 != var19;
            var8 = null;
            if(!var6) { _fun0004_ip = 76; continue _fun0004 }
case 77:
            var10 = _closure1_slot29;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var11 = 21;
            var6 = var13[var11];
            var6 = var12.bind(var5)(var6);
            var9 = var6.Avatar;
            var6 = {};
            var20 = var16.appIcon;
            var6['style'] = var20;
            var6['user'] = var19;
            var11 = var13[var11];
            var11 = var12.bind(var5)(var11);
            var11 = var11.AvatarSizes;
            var11 = var11.XSMALL;
            var6['size'] = var11;
            var6['guildId'] = var5;
            var8 = var10.bind(var5)(var9, var6);
case 76:
            var6 = new Array(3);
            var6[0] = var8;
            var10 = _closure1_slot30;
            var9 = _closure1_slot8;
            var8 = {};
            var11 = var16.connectionsChecksGroupTextContainer;
            var8['style'] = var11;
            var19 = _closure1_slot30;
            var12 = _closure1_slot8;
            var11 = {};
            var13 = var16.connectionsChecksGroupTextNameContainer;
            var11['style'] = var13;
            var23 = _closure1_slot29;
            var22 = _closure1_slot0;
            var20 = _closure1_slot2;
            var13 = 24;
            var20 = var20[var13];
            var20 = var22.bind(var5)(var20);
            var22 = var20.Text;
            var20 = {'variant': 'text-md/medium', 'color': 'mobile-text-heading-primary'};
            var26 = var17 == var25;
            var24 = undefined;
            if(var26) { _fun0004_ip = 78; continue _fun0004 }
case 79:
            var24 = var25.name;
case 78:
            var20['children'] = var24;
            var22 = var23.bind(var5)(var22, var20);
            var20 = new Array(2);
            var20[0] = var22;
            var20[1] = var21;
            var11['children'] = var20;
            var12 = var19.bind(var5)(var12, var11);
            var11 = new Array(2);
            var11[0] = var12;
            var12 = null;
            if(var18) { _fun0004_ip = 80; continue _fun0004 }
case 81:
            var12 = null;
            if(var15) { _fun0004_ip = 80; continue _fun0004 }
case 82:
            var15 = _closure1_slot29;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var13 = var20[var13];
            var13 = var19.bind(var5)(var13);
            var14 = var13.Text;
            var13 = {'variant': 'text-xs/normal', 'color': 'text-muted'};
            var16 = var16.connectionsCheck;
            var13['style'] = var16;
            var16 = 25;
            var17 = var20[var16];
            var17 = var19.bind(var5)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var20[var16];
            var16 = var19.bind(var5)(var16);
            var16 = var16.t;
            var16 = var16["+z5dYe"];
            var16 = var17.bind(var18)(var16);
            var13['children'] = var16;
            var12 = var15.bind(var5)(var14, var13);
case 80:
            var11[1] = var12;
            var8['children'] = var11;
            var8 = var10.bind(var5)(var9, var8);
            var6[1] = var8;
            var6[2] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 68:
            return var1;
        }
    };
    var _closure1_slot37 = var1;
    var1 = function ConnectionsChecks(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var3 = var1.eligibilityStatesGroups;
            var _closure2_slot0 = var3;
            var2 = var1.onPlatformAttempt;
            var _closure2_slot1 = var2;
            var2 = var1.onPlatformConnect;
            var _closure2_slot2 = var2;
            var2 = var1.onPlatformConnected;
            var _closure2_slot3 = var2;
            var4 = var1.onPlatformIdentityAuthorize;
            var _closure2_slot4 = var4;
            var14 = var1.initialAttemptedPlatformType;
            var13 = var1.initialAttemptedApplicationId;
            var4 = undefined;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var _closure2_slot16 = var4;
            var6 = _closure1_slot32;
            var6 = var6.bind(var4)();
            var _closure2_slot5 = var6;
            var8 = _closure1_slot5;
            var7 = var8.useState;
            var6 = {};
            var7 = var7.bind(var8)(var6);
            var6 = _closure1_slot4;
            var11 = 2;
            var6 = var6.bind(var4)(var7, var11);
            var8 = 0;
            var7 = var6[var8];
            var _closure2_slot6 = var7;
            var7 = 1;
            var6 = var6[var7];
            var _closure2_slot7 = var6;
            var9 = _closure1_slot5;
            var6 = var9.useState;
            var9 = var6.bind(var9)(var8);
            var6 = _closure1_slot4;
            var6 = var6.bind(var4)(var9, var11);
            var9 = var6[var8];
            var _closure2_slot8 = var9;
            var6 = var6[var7];
            var _closure2_slot9 = var6;
            var10 = _closure1_slot5;
            var9 = var10.useState;
            var12 = null;
            var15 = var12 != var14;
            var6 = null;
            if(!var15) { _fun0007_ip = 83; continue _fun0007 }
case 84:
            var6 = var14;
case 83:
            var9 = var9.bind(var10)(var6);
            var6 = _closure1_slot4;
            var6 = var6.bind(var4)(var9, var11);
            var10 = var6[var8];
            _closure2_slot10 = var10;
            var6 = var6[var7];
            _closure2_slot11 = var6;
            var9 = _closure1_slot5;
            var6 = var9.useState;
            var14 = var12 != var13;
            var12 = null;
            if(!var14) { _fun0007_ip = 85; continue _fun0007 }
case 86:
            var12 = var13;
case 85:
            var9 = var6.bind(var9)(var12);
            var6 = _closure1_slot4;
            var6 = var6.bind(var4)(var9, var11);
            var9 = var6[var8];
            _closure2_slot12 = var9;
            var6 = var6[var7];
            _closure2_slot13 = var6;
            var8 = _closure1_slot5;
            var7 = var8.useMemo;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 32;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.flatten;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var7.bind(var8)(var3, var6);
            _closure2_slot14 = var3;
            var11 = _closure1_slot5;
            var8 = var11.useMemo;
            var7 = new Array(1);
            var7[0] = var3;
            var6 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 32;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.groupBy;
                var2 = _closure2_slot14;
                var1 = function(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var1 = arg1;
                        var4 = var1.connection_type;
                        var3 = var1.application_id;
                        var2 = null;
                        var5 = var2 != var3;
                        var3 = '';
                        var2 = var3;
                        if(!var5) { _fun0008_ip = 87; continue _fun0008 }
case 88:
                        var6 = var1.application_id;
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var5 = var1.concat;
                        var1 = ':';
                        var2 = var5.bind(var1)(var6);
case 87:
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var1 = var1.concat;
                        var1 = var1.bind(var3)(var4, var2);
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var8 = var8.bind(var11)(var6, var7);
            _closure2_slot15 = var8;
            var11 = _closure1_slot5;
            var7 = var11.useEffect;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var3 = _closure2_slot9;
                var1 = global;
                var2 = var1.Date;
                var1 = var2.now;
                var2 = var1.bind(var2)();
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var3 = var7.bind(var11)(var3, var6);
            var7 = _closure1_slot5;
            var6 = var7.useEffect;
            var3 = new Array(4);
            var3[0] = var8;
            var3[1] = var10;
            var3[2] = var9;
            var3[3] = var2;
            var2 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = _closure2_slot10;
                    var4 = null;
                    if(!(var4 != var2)) { _fun0009_ip = 89; continue _fun0009 }
case 39:
                    var3 = _closure2_slot15;
                    var8 = _closure2_slot10;
                    var2 = _closure2_slot12;
                    var2 = var4 != var2;
                    var7 = '';
                    var6 = var7;
                    if(!var2) { _fun0009_ip = 10; continue _fun0009 }
case 90:
                    var10 = _closure2_slot12;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var9 = var2.concat;
                    var2 = ':';
                    var6 = var9.bind(var2)(var10);
case 10:
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var2 = var2.concat;
                    var2 = var2.bind(var7)(var8, var6);
                    var7 = var3[var2];
                    if(!(var4 != var7)) { _fun0009_ip = 89; continue _fun0009 }
case 91:
                    var3 = var7.every;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.result;
                        return var1;
                    };
                    var2 = var3.bind(var7)(var2);
                    if(!var2) { _fun0009_ip = 89; continue _fun0009 }
case 92:
                    var2 = 0;
                    var6 = var7[var2];
                    var8 = var4 == var6;
                    var3 = undefined;
                    var2 = undefined;
                    if(var8) { _fun0009_ip = 93; continue _fun0009 }
case 4:
                    var2 = var6.identity_connected_account_type;
case 93:
                    if(!(var4 == var2)) { _fun0009_ip = 94; continue _fun0009 }
case 95:
                    var2 = _closure2_slot10;
case 94:
                    var6 = var7.find;
                    var5 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.application;
                        var1 = null;
                        var1 = var1 != var2;
                        return var1;
                    };
                    var6 = var6.bind(var7)(var5);
                    var7 = var4 == var6;
                    var5 = undefined;
                    if(var7) { _fun0009_ip = 96; continue _fun0009 }
case 97:
                    var5 = var6.application;
case 96:
                    var6 = var4 != var5;
                    var4 = null;
                    if(!var6) { _fun0009_ip = 98; continue _fun0009 }
case 99:
                    var4 = var5;
case 98:
                    var1 = _closure2_slot3;
                    var1 = var1.bind(var3)(var2, var4);
case 89:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var6.bind(var7)(var2, var3);
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 33;
            var2 = var9[var2];
            var6 = var3.bind(var4)(var2);
            var3 = var6.useToken;
            var7 = _closure1_slot1;
            var2 = 16;
            var2 = var9[var2];
            var2 = var7.bind(var4)(var2);
            var2 = var2.unsafe_rawColors;
            var2 = var2.GREEN_330;
            var2 = var3.bind(var6)(var2);
            _closure2_slot16 = var2;
            var3 = _closure1_slot29;
            var2 = _closure1_slot31;
            var1 = {};
            var6 = global;
            var7 = var6.Object;
            var6 = var7.keys;
            var8 = var6.bind(var7)(var8);
            var7 = var8.sort;
            var6 = function(arg1, arg2) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var4 = _closure2_slot15;
                    var3 = arg1;
                    var5 = var4[var3];
                    var4 = var5.every;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.result;
                        return var1;
                    };
                    var7 = var4.bind(var5)(var3);
                    var3 = _closure2_slot15;
                    var2 = arg2;
                    var3 = var3[var2];
                    var2 = var3.every;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.result;
                        return var1;
                    };
                    var4 = var2.bind(var3)(var1);
                    var3 = true;
                    if(!(var3 === var7)) { _fun0010_ip = 100; continue _fun0010 }
case 101:
                    var1 = 1;
                    var2 = false;
                    if(!(var2 !== var4)) { _fun0010_ip = 14; continue _fun0010 }
case 100:
                    var6 = false;
                    var2 = 0;
                    if(!(var6 === var7)) { _fun0010_ip = 102; continue _fun0010 }
case 103:
                    var2 = 0;
                    if(!(var3 === var4)) { _fun0010_ip = 102; continue _fun0010 }
case 54:
                    var2 = -1;
case 102:
                    var1 = var2;
case 14:
                    return var1;
                }
            };
            var7 = var7.bind(var8)(var6);
            var6 = var7.map;
            var5 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var5 = arg1;
                    var2 = _closure2_slot15;
                    var4 = var2[var5];
                    var8 = var5.startsWith;
                    var10 = _closure1_slot20;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var9 = var3.concat;
                    var7 = '';
                    var3 = ':';
                    var3 = var9.bind(var7)(var10, var3);
                    var3 = var8.bind(var5)(var3);
                    if(!var3) { _fun0011_ip = 104; continue _fun0011 }
case 105:
                    var3 = 0;
                    var9 = var4[var3];
                    var8 = null;
                    if(!(var8 == var9)) { _fun0011_ip = 106; continue _fun0011 }
case 104:
                    var9 = var4.find;
                    var8 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.operator;
                        var1 = null;
                        var1 = var1 == var2;
                        return var1;
                    };
                    var8 = var9.bind(var4)(var8);
                    var10 = var4.filter;
                    var9 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.operator;
                        var1 = null;
                        var1 = var1 != var2;
                        return var1;
                    };
                    var19 = var10.bind(var4)(var9);
                    var21 = null;
                    var14 = var21 == var8;
                    if(var14) { _fun0011_ip = 2; continue _fun0011 }
case 107:
                    var14 = var8.result;
case 2:
                    if(!var14) { _fun0011_ip = 108; continue _fun0011 }
case 109:
                    var9 = var19.every;
                    var8 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.result;
                        return var1;
                    };
                    var14 = var9.bind(var19)(var8);
case 108:
                    var9 = var4.find;
                    var8 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.application;
                        var1 = null;
                        var1 = var1 != var2;
                        return var1;
                    };
                    var8 = var9.bind(var4)(var8);
                    var11 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var9 = 18;
                    var9 = var10[var9];
                    var10 = undefined;
                    var11 = var11.bind(var10)(var9);
                    var9 = var11.get;
                    var27 = var9.bind(var11)(var5);
                    var _closure3_slot1 = var27;
                    var15 = var21 == var27;
                    if(var15) { _fun0011_ip = 110; continue _fun0011 }
case 111:
                    var15 = var27.enabled;
case 110:
                    var9 = var21 == var8;
                    var28 = undefined;
                    if(var9) { _fun0011_ip = 37; continue _fun0011 }
case 83:
                    var28 = var8.application;
case 37:
                    var _closure3_slot2 = var28;
                    var9 = var21 == var28;
                    var8 = undefined;
                    if(var9) { _fun0011_ip = 112; continue _fun0011 }
case 113:
                    var8 = var28.bot;
case 112:
                    var8 = var21 != var8;
                    var24 = null;
                    if(!var8) { _fun0011_ip = 114; continue _fun0011 }
case 115:
                    var11 = _closure1_slot10;
                    var35 = var28.bot;
                    var9 = var11.prototype;
                    var9 = Object.create(var9, {constructor: {value: var11}});
                    var36 = var9;
                    var8 = new var36[var11](var35, var34);
                    var24 = var8 instanceof Object ? var8 : var9;
case 114:
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 26;
                    var8 = var11[var8];
                    var8 = var9.bind(var10)(var8);
                    var9 = var8.officialApplicationIds;
                    var8 = var9.includes;
                    var12 = var21 == var28;
                    var11 = undefined;
                    if(var12) { _fun0011_ip = 116; continue _fun0011 }
case 117:
                    var11 = var28.id;
case 116:
                    var12 = var21 != var11;
                    if(!var12) { _fun0011_ip = 118; continue _fun0011 }
case 119:
                    var7 = var11;
case 118:
                    var7 = var8.bind(var9)(var7);
                    var9 = _closure2_slot6;
                    var11 = var21 == var27;
                    var8 = undefined;
                    if(var11) { _fun0011_ip = 120; continue _fun0011 }
case 121:
                    var8 = var27.type;
case 120:
                    if(!(var21 == var8)) { _fun0011_ip = 122; continue _fun0011 }
case 123:
                    var8 = _closure1_slot19;
case 122:
                    var9 = var9[var8];
                    var11 = !var14;
                    if(!var11) { _fun0011_ip = 124; continue _fun0011 }
case 125:
                    var11 = var21 != var9;
case 124:
                    if(!var11) { _fun0011_ip = 126; continue _fun0011 }
case 127:
                    var8 = _closure2_slot8;
                    var11 = var9 <= var8;
case 126:
                    var13 = _closure1_slot29;
                    var9 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    if(var14) { _fun0011_ip = 128; continue _fun0011 }
case 9:
                    if(var11) { _fun0011_ip = 129; continue _fun0011 }
case 130:
                    if(var15) { _fun0011_ip = 131; continue _fun0011 }
case 132:
                    var8 = 24;
                    var8 = var18[var8];
                    var8 = var9.bind(var10)(var8);
                    var12 = var8.Text;
                    var8 = {'variant': 'text-md/medium', 'color': 'text-muted'};
                    var16 = 25;
                    var17 = var18[var16];
                    var17 = var9.bind(var10)(var17);
                    var20 = var17.intl;
                    var17 = var20.string;
                    var16 = var18[var16];
                    var16 = var9.bind(var10)(var16);
                    var16 = var16.t;
                    var16 = var16.cEts68;
                    var16 = var17.bind(var20)(var16);
                    var8['children'] = var16;
                    var12 = var13.bind(var10)(var12, var8);
                    _fun0011_ip = 133; continue _fun0011;
case 131:
                    var8 = 21;
                    var8 = var18[var8];
                    var8 = var9.bind(var10)(var8);
                    var16 = var8.Icon;
                    var8 = {};
                    var20 = _closure1_slot1;
                    var17 = 31;
                    var17 = var18[var17];
                    var17 = var20.bind(var10)(var17);
                    var8['source'] = var17;
                    var17 = _closure2_slot5;
                    var17 = var17.connectionsChecksGroupCaret;
                    var8['style'] = var17;
                    var12 = var13.bind(var10)(var16, var8);
case 133:
                    _fun0011_ip = 134; continue _fun0011;
case 129:
                    var8 = 24;
                    var8 = var18[var8];
                    var8 = var9.bind(var10)(var8);
                    var16 = var8.Text;
                    var8 = {'variant': 'text-sm/semibold', 'color': 'text-brand'};
                    var17 = 25;
                    var20 = var18[var17];
                    var20 = var9.bind(var10)(var20);
                    var22 = var20.intl;
                    var20 = var22.string;
                    var17 = var18[var17];
                    var17 = var9.bind(var10)(var17);
                    var17 = var17.t;
                    var17 = var17["5911Lb"];
                    var17 = var20.bind(var22)(var17);
                    var8['children'] = var17;
                    var12 = var13.bind(var10)(var16, var8);
case 134:
                    _fun0011_ip = 135; continue _fun0011;
case 128:
                    var8 = 21;
                    var8 = var18[var8];
                    var8 = var9.bind(var10)(var8);
                    var9 = var8.Icon;
                    var8 = {};
                    var17 = _closure1_slot1;
                    var16 = 30;
                    var16 = var18[var16];
                    var16 = var17.bind(var10)(var16);
                    var8['source'] = var16;
                    var16 = _closure2_slot5;
                    var16 = var16.connectionsChecksGroupCheckmark;
                    var8['style'] = var16;
                    var12 = var13.bind(var10)(var9, var8);
case 135:
                    var8 = var21 == var27;
                    var9 = undefined;
                    if(var8) { _fun0011_ip = 136; continue _fun0011 }
case 137:
                    var9 = var27.type;
case 136:
                    var8 = _closure1_slot21;
                    var8 = var8.STEAM;
                    var22 = undefined;
                    if(!(var9 === var8)) { _fun0011_ip = 77; continue _fun0011 }
case 138:
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var8 = 25;
                    var9 = var17[var8];
                    var9 = var16.bind(var10)(var9);
                    var13 = var9.intl;
                    var9 = var13.string;
                    var8 = var17[var8];
                    var8 = var16.bind(var10)(var8);
                    var8 = var8.t;
                    var8 = var8.NcZh6K;
                    var8 = var9.bind(var13)(var8);
                    var _closure3_slot0 = var8;
                    var22 = var8;
case 77:
                    if(var7) { _fun0011_ip = 139; continue _fun0011 }
case 140:
                    var7 = var21 != var24;
                    var23 = undefined;
                    if(!var7) { _fun0011_ip = 141; continue _fun0011 }
case 142:
                    var9 = _closure1_slot29;
                    var8 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var7 = 29;
                    var7 = var13[var7];
                    var8 = var8.bind(var10)(var7);
                    var7 = {};
                    var13 = _closure2_slot5;
                    var13 = var13.botTag;
                    var7['style'] = var13;
                    var13 = var24.isVerifiedBot;
                    var13 = var13.bind(var24)();
                    var7['verified'] = var13;
                    var23 = var9.bind(var10)(var8, var7);
                    _fun0011_ip = 141; continue _fun0011;
case 139:
                    var9 = _closure1_slot29;
                    var8 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var7 = 34;
                    var7 = var13[var7];
                    var8 = var8.bind(var10)(var7);
                    var7 = {};
                    var13 = _closure2_slot5;
                    var13 = var13.botTag;
                    var7['style'] = var13;
                    var13 = _closure1_slot28;
                    var7['guildId'] = var13;
                    var13 = _closure2_slot16;
                    var7['roleColor'] = var13;
                    var13 = 16;
                    var7['size'] = var13;
                    var23 = var9.bind(var10)(var8, var7);
case 141:
                    var9 = _closure1_slot30;
                    var8 = _closure1_slot7;
                    var7 = {};
                    var13 = 'button';
                    var7['accessibilityRole'] = var13;
                    var13 = _closure2_slot5;
                    var16 = var13.connectionsChecksGroup;
                    var13 = new Array(3);
                    var13[0] = var16;
                    var16 = null;
                    if(!var14) { _fun0011_ip = 143; continue _fun0011 }
case 144:
                    var17 = _closure2_slot5;
                    var16 = var17.connectionsChecksGroupPassed;
case 143:
                    var13[1] = var16;
                    var16 = null;
                    if(var15) { _fun0011_ip = 145; continue _fun0011 }
case 146:
                    var17 = _closure2_slot5;
                    var16 = var17.connectionsChecksGroupPlatformDisabled;
case 145:
                    var13[2] = var16;
                    var7['style'] = var13;
                    var13 = var14;
                    if(var13) { _fun0011_ip = 147; continue _fun0011 }
case 148:
                    var13 = !var15;
case 147:
                    var7['disabled'] = var13;
                    var13 = function onPress() {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                            var1 = _closure3_slot1;
                            var6 = null;
                            var3 = var6 == var1;
                            var1 = undefined;
                            var4 = undefined;
                            if(var3) { _fun0012_ip = 149; continue _fun0012 }
case 150:
                            var3 = _closure3_slot1;
                            var4 = var3.type;
case 149:
                            if(!(var6 == var4)) { _fun0012_ip = 151; continue _fun0012 }
case 152:
                            var4 = _closure1_slot19;
case 151:
                            var3 = _closure3_slot2;
                            var5 = var6 != var3;
                            var3 = null;
                            if(!var5) { _fun0012_ip = 153; continue _fun0012 }
case 154:
                            var3 = _closure3_slot2;
case 153:
                            var7 = _closure2_slot7;
                            var5 = {};
                            var10 = _closure2_slot6;
                            var11 = var5;
                            var8 = copyDataProperties(var11, var10);
                            var8 = global;
                            var9 = var8.Date;
                            var8 = var9.now;
                            var8 = var8.bind(var9)();
                            var5[3] = var8;
                            var5 = var7.bind(var1)(var5);
                            var5 = _closure2_slot11;
                            var5 = var5.bind(var1)(var4);
                            var5 = _closure2_slot13;
                            var8 = var6 == var3;
                            var7 = undefined;
                            if(var8) { _fun0012_ip = 155; continue _fun0012 }
case 156:
                            var7 = var3.id;
case 155:
                            var8 = var6 != var7;
                            var6 = null;
                            if(!var8) { _fun0012_ip = 157; continue _fun0012 }
case 60:
                            var6 = var7;
case 157:
                            var5 = var5.bind(var1)(var6);
                            var5 = _closure2_slot1;
                            var5 = var5.bind(var1)();
                            var2 = _closure2_slot2;
                            var2 = var2.bind(var1)(var4, var3);
                            return var1;
                        }
                    };
                    var7['onPress'] = var13;
                    var13 = null;
                    if(var14) { _fun0011_ip = 158; continue _fun0011 }
case 159:
                    var13 = null;
                    if(!var11) { _fun0011_ip = 158; continue _fun0011 }
case 160:
                    var15 = _closure1_slot29;
                    var14 = _closure1_slot8;
                    var11 = {};
                    var16 = _closure2_slot5;
                    var16 = var16.connectionsChecksGroupRequirementsNotMet;
                    var11['style'] = var16;
                    var18 = _closure1_slot29;
                    var29 = _closure1_slot0;
                    var30 = _closure1_slot2;
                    var16 = 24;
                    var16 = var30[var16];
                    var16 = var29.bind(var10)(var16);
                    var17 = var16.Text;
                    var16 = {'variant': 'text-xs/normal', 'color': 'text-overlay-light'};
                    var20 = 25;
                    var25 = var30[var20];
                    var25 = var29.bind(var10)(var25);
                    var26 = var25.intl;
                    var25 = var26.string;
                    var20 = var30[var20];
                    var20 = var29.bind(var10)(var20);
                    var20 = var20.t;
                    var20 = var20.UB3hKo;
                    var20 = var25.bind(var26)(var20);
                    var16['children'] = var20;
                    var16 = var18.bind(var10)(var17, var16);
                    var11['children'] = var16;
                    var13 = var15.bind(var10)(var14, var11);
case 158:
                    var11 = new Array(5);
                    var11[0] = var13;
                    var14 = var21 != var27;
                    var13 = null;
                    if(!var14) { _fun0011_ip = 161; continue _fun0011 }
case 162:
                    var16 = _closure1_slot29;
                    var15 = _closure1_slot34;
                    var14 = {};
                    var17 = var27.type;
                    var14['platformType'] = var17;
                    var13 = var16.bind(var10)(var15, var14);
case 161:
                    var11[1] = var13;
                    var14 = var21 != var24;
                    var13 = null;
                    if(!var14) { _fun0011_ip = 163; continue _fun0011 }
case 164:
                    var16 = _closure1_slot29;
                    var18 = _closure1_slot0;
                    var20 = _closure1_slot2;
                    var17 = 21;
                    var14 = var20[var17];
                    var14 = var18.bind(var10)(var14);
                    var15 = var14.Avatar;
                    var14 = {};
                    var25 = _closure2_slot5;
                    var25 = var25.appIcon;
                    var14['style'] = var25;
                    var14['user'] = var24;
                    var17 = var20[var17];
                    var17 = var18.bind(var10)(var17);
                    var17 = var17.AvatarSizes;
                    var17 = var17.XSMALL;
                    var14['size'] = var17;
                    var14['guildId'] = var10;
                    var13 = var16.bind(var10)(var15, var14);
case 163:
                    var11[2] = var13;
                    var15 = _closure1_slot30;
                    var14 = _closure1_slot8;
                    var13 = {};
                    var20 = _closure2_slot5;
                    var16 = var20.connectionsChecksGroupTextContainer;
                    var13['style'] = var16;
                    var18 = _closure1_slot30;
                    var17 = _closure1_slot8;
                    var16 = {};
                    var20 = var20.connectionsChecksGroupTextNameContainer;
                    var16['style'] = var20;
                    var25 = _closure1_slot29;
                    var24 = _closure1_slot0;
                    var26 = _closure1_slot2;
                    var20 = 24;
                    var20 = var26[var20];
                    var20 = var24.bind(var10)(var20);
                    var24 = var20.Text;
                    var20 = {'variant': 'text-md/medium', 'color': 'mobile-text-heading-primary'};
                    var29 = var21 == var27;
                    var26 = undefined;
                    if(var29) { _fun0011_ip = 165; continue _fun0011 }
case 166:
                    var26 = var27.name;
case 165:
                    if(!(var21 == var26)) { _fun0011_ip = 167; continue _fun0011 }
case 168:
                    var29 = var21 == var28;
                    var27 = undefined;
                    if(var29) { _fun0011_ip = 169; continue _fun0011 }
case 170:
                    var27 = var28.name;
case 169:
                    var26 = var27;
case 167:
                    var20['children'] = var26;
                    var24 = var25.bind(var10)(var24, var20);
                    var20 = new Array(3);
                    var20[0] = var24;
                    var20[1] = var23;
                    var22 = var21 != var22;
                    var21 = null;
                    if(!var22) { _fun0011_ip = 171; continue _fun0011 }
case 172:
                    var24 = _closure1_slot29;
                    var23 = _closure1_slot7;
                    var22 = {};
                    var25 = function onPress() {
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var1 = 35;
                        var2 = var8[var1];
                        var1 = undefined;
                        var4 = var7.bind(var1)(var2);
                        var3 = _closure3_slot0;
                        var2 = null;
                        var3 = var2 != var3;
                        var2 = 'tooltip is null';
                        var2 = var4.bind(var1)(var3, var2);
                        var2 = 36;
                        var2 = var8[var2];
                        var4 = var7.bind(var1)(var2);
                        var3 = var4.open;
                        var2 = {};
                        var6 = 'CONNECTIONS_STEAM_TOOLTIP';
                        var2['key'] = var6;
                        var6 = 37;
                        var6 = var8[var6];
                        var6 = var7.bind(var1)(var6);
                        var2['icon'] = var6;
                        var5 = _closure3_slot0;
                        var2['content'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var22['onPress'] = var25;
                    var27 = _closure1_slot29;
                    var29 = _closure1_slot0;
                    var30 = _closure1_slot2;
                    var28 = 21;
                    var25 = var30[var28];
                    var25 = var29.bind(var10)(var25);
                    var26 = var25.Icon;
                    var25 = {};
                    var32 = _closure1_slot1;
                    var31 = 37;
                    var31 = var30[var31];
                    var31 = var32.bind(var10)(var31);
                    var25['source'] = var31;
                    var28 = var30[var28];
                    var28 = var29.bind(var10)(var28);
                    var28 = var28.Icon;
                    var28 = var28.Sizes;
                    var28 = var28.SMALL_20;
                    var25['size'] = var28;
                    var28 = _closure2_slot5;
                    var28 = var28.connectionsChecksGroupTextNameInfoIcon;
                    var25['style'] = var28;
                    var25 = var27.bind(var10)(var26, var25);
                    var22['children'] = var25;
                    var21 = var24.bind(var10)(var23, var22);
case 171:
                    var20[2] = var21;
                    var16['children'] = var20;
                    var17 = var18.bind(var10)(var17, var16);
                    var16 = new Array(2);
                    var16[0] = var17;
                    var18 = var19.map;
                    var17 = function(arg1) {
                        var1 = arg1;
                        var10 = var1.connection_type;
                        var5 = var1.connection_metadata_field;
                        var9 = var1.operator;
                        var8 = var1.value;
                        var7 = var1.result;
                        var6 = var1.description;
                        var11 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var3 = 35;
                        var2 = var12[var3];
                        var4 = undefined;
                        var15 = var11.bind(var4)(var2);
                        var2 = null;
                        var14 = var2 != var5;
                        var13 = 'connectionMetadataField is null';
                        var13 = var15.bind(var4)(var14, var13);
                        var13 = var12[var3];
                        var15 = var11.bind(var4)(var13);
                        var14 = var2 != var9;
                        var13 = 'operator is null';
                        var13 = var15.bind(var4)(var14, var13);
                        var3 = var12[var3];
                        var11 = var11.bind(var4)(var3);
                        var3 = var2 != var8;
                        var2 = 'value is null';
                        var2 = var11.bind(var4)(var3, var2);
                        var3 = _closure1_slot29;
                        var2 = _closure1_slot36;
                        var1 = {};
                        var1['connectionType'] = var10;
                        var1['connectionMetadataField'] = var5;
                        var1['operator'] = var9;
                        var1['value'] = var8;
                        var1['result'] = var7;
                        var1['description'] = var6;
                        var1 = var3.bind(var4)(var2, var1, var5);
                        return var1;
                    };
                    var17 = var18.bind(var19)(var17);
                    var16[1] = var17;
                    var13['children'] = var16;
                    var13 = var15.bind(var10)(var14, var13);
                    var11[3] = var13;
                    var11[4] = var12;
                    var7['children'] = var11;
                    var7 = var9.bind(var10)(var8, var7, var5);
                    return var7;
case 106:
                    var7 = var4[var3];
                    var4 = _closure1_slot29;
                    var3 = _closure1_slot37;
                    var2 = {};
                    var2['eligibilityState'] = var7;
                    var6 = function onAttempted(arg1, arg2) {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                            var4 = arg1;
                            var3 = _closure2_slot11;
                            var1 = undefined;
                            var3 = var3.bind(var1)(var4);
                            var5 = _closure2_slot13;
                            var3 = arg2;
                            var3 = var5.bind(var1)(var3);
                            var3 = null;
                            if(!(var3 != var4)) { _fun0013_ip = 173; continue _fun0013 }
case 174:
                            var2 = _closure2_slot1;
                            var2 = var2.bind(var1)();
case 173:
                            return var1;
                        }
                    };
                    var2['onAttempted'] = var6;
                    var1 = _closure2_slot4;
                    var2['onIdentityAuthorize'] = var1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2, var5);
                    return var1;
                }
            };
            var5 = var6.bind(var7)(var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot38 = var1;
    var1 = function ConnectedUserAccountOptions(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var2 = var1.account;
            var _closure2_slot0 = var2;
            var3 = var1.setShowPreviewInvisibleIcon;
            var _closure2_slot1 = var3;
            var1 = var1.setShowPreviewMetadata;
            var _closure2_slot2 = var1;
            var1 = _closure1_slot32;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var6 = _closure1_slot5;
            var3 = var6.useState;
            var1 = var2.friendSync;
            var3 = var3.bind(var6)(var1);
            var1 = _closure1_slot4;
            var8 = 2;
            var1 = var1.bind(var4)(var3, var8);
            var6 = 0;
            var14 = var1[var6];
            var3 = 1;
            var1 = var1[var3];
            var _closure2_slot3 = var1;
            var10 = _closure1_slot5;
            var7 = var10.useState;
            var1 = var2.showActivity;
            var7 = var7.bind(var10)(var1);
            var1 = _closure1_slot4;
            var1 = var1.bind(var4)(var7, var8);
            var13 = var1[var6];
            var1 = var1[var3];
            var _closure2_slot4 = var1;
            var10 = _closure1_slot5;
            var7 = var10.useState;
            var1 = var2.metadataVisibility;
            var1 = var3 === var1;
            var7 = var7.bind(var10)(var1);
            var1 = _closure1_slot4;
            var1 = var1.bind(var4)(var7, var8);
            var10 = var1[var6];
            var _closure2_slot5 = var10;
            var1 = var1[var3];
            var _closure2_slot6 = var1;
            var12 = _closure1_slot5;
            var7 = var12.useState;
            var1 = var2.visibility;
            var1 = var3 === var1;
            var7 = var7.bind(var12)(var1);
            var1 = _closure1_slot4;
            var1 = var1.bind(var4)(var7, var8);
            var12 = var1[var6];
            var _closure2_slot7 = var12;
            var1 = var1[var3];
            var _closure2_slot8 = var1;
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 38;
            var1 = var6[var1];
            var7 = var3.bind(var4)(var1);
            var1 = function() {
                var4 = _closure2_slot1;
                var1 = _closure2_slot7;
                var3 = !var1;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot2;
                var2 = _closure2_slot5;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var7.bind(var4)(var1);
            var1 = 18;
            var1 = var6[var1];
            var6 = var3.bind(var4)(var1);
            var3 = var6.get;
            var1 = var2.type;
            var1 = var3.bind(var6)(var1);
            var7 = _closure1_slot25;
            var6 = var7.has;
            var3 = var2.type;
            var3 = var6.bind(var7)(var3);
            var6 = undefined;
            if(!var3) { _fun0014_ip = 175; continue _fun0014 }
case 176:
            var8 = _closure1_slot29;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var3 = 39;
            var3 = var19[var3];
            var3 = var18.bind(var4)(var3);
            var7 = var3.FormSwitchRow;
            var3 = {};
            var15 = 25;
            var16 = var19[var15];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var19[var15];
            var15 = var18.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15["+KCMSi"];
            var15 = var16.bind(var17)(var15);
            var3['label'] = var15;
            var3['value'] = var14;
            var14 = function onValueChange(arg1) {
                var6 = arg1;
                var3 = _closure2_slot3;
                var1 = undefined;
                var3 = var3.bind(var1)(var6);
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 40;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.setFriendSync;
                var2 = _closure2_slot0;
                var3 = var2.type;
                var2 = var2.id;
                var2 = var4.bind(var5)(var3, var2, var6);
                return var1;
            };
            var3['onValueChange'] = var14;
            var6 = var8.bind(var4)(var7, var3);
case 175:
            var7 = _closure1_slot26;
            var3 = var7.has;
            var2 = var2.type;
            var2 = var3.bind(var7)(var2);
            var7 = undefined;
            if(!var2) { _fun0014_ip = 177; continue _fun0014 }
case 178:
            var8 = _closure1_slot29;
            var15 = _closure1_slot0;
            var18 = _closure1_slot2;
            var2 = 39;
            var2 = var18[var2];
            var2 = var15.bind(var4)(var2);
            var3 = var2.FormSwitchRow;
            var2 = {};
            var14 = 25;
            var16 = var18[var14];
            var16 = var15.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.formatToPlainString;
            var14 = var18[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.t;
            var15 = var14["6u6J0q"];
            var14 = {};
            var18 = var1.name;
            var14['platform'] = var18;
            var14 = var16.bind(var17)(var15, var14);
            var2['label'] = var14;
            var2['value'] = var13;
            var13 = function onValueChange(arg1) {
                var6 = arg1;
                var3 = _closure2_slot4;
                var1 = undefined;
                var3 = var3.bind(var1)(var6);
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 40;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.setShowActivity;
                var2 = _closure2_slot0;
                var3 = var2.type;
                var2 = var2.id;
                var2 = var4.bind(var5)(var3, var2, var6);
                return var1;
            };
            var2['onValueChange'] = var13;
            var7 = var8.bind(var4)(var3, var2);
case 177:
            var2 = var1.hasMetadata;
            var1 = true;
            var8 = undefined;
            if(!(var1 === var2)) { _fun0014_ip = 65; continue _fun0014 }
case 179:
            var3 = _closure1_slot29;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var1 = 39;
            var1 = var17[var1];
            var1 = var16.bind(var4)(var1);
            var2 = var1.FormSwitchRow;
            var1 = {};
            var13 = 25;
            var14 = var17[var13];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.FYKGsL;
            var13 = var14.bind(var15)(var13);
            var1['label'] = var13;
            var1['value'] = var10;
            var10 = !var12;
            var1['disabled'] = var10;
            var10 = function onValueChange(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var7 = arg1;
                    var3 = _closure2_slot2;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var7);
                    var3 = _closure2_slot6;
                    var3 = var3.bind(var1)(var7);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 40;
                    var3 = var5[var3];
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.setMetadataVisibility;
                    var2 = _closure2_slot0;
                    var4 = var2.type;
                    var3 = var2.id;
                    var2 = 0;
                    if(!var7) { _fun0015_ip = 180; continue _fun0015 }
case 40:
                    var2 = 1;
case 180:
                    var2 = var5.bind(var6)(var4, var3, var2);
                    return var1;
                }
            };
            var1['onValueChange'] = var10;
            var8 = var3.bind(var4)(var2, var1);
case 65:
            var3 = _closure1_slot30;
            var2 = _closure1_slot8;
            var1 = {};
            var9 = var9.accountConnectedPrivacyOptionsContainer;
            var1['style'] = var9;
            var10 = _closure1_slot29;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var5 = 39;
            var5 = var17[var5];
            var5 = var16.bind(var4)(var5);
            var9 = var5.FormSwitchRow;
            var5 = {};
            var13 = 25;
            var14 = var17[var13];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.f7yOAX;
            var13 = var14.bind(var15)(var13);
            var5['label'] = var13;
            var5['value'] = var12;
            var11 = function onValueChange(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var7 = arg1;
                    var4 = _closure2_slot1;
                    var3 = !var7;
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot8;
                    var3 = var3.bind(var1)(var7);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 40;
                    var3 = var5[var3];
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.setVisibility;
                    var2 = _closure2_slot0;
                    var4 = var2.type;
                    var3 = var2.id;
                    var2 = 0;
                    if(!var7) { _fun0016_ip = 181; continue _fun0016 }
case 180:
                    var2 = 1;
case 181:
                    var2 = var5.bind(var6)(var4, var3, var2);
                    return var1;
                }
            };
            var5['onValueChange'] = var11;
            var9 = var10.bind(var4)(var9, var5);
            var5 = new Array(4);
            var5[0] = var9;
            var5[1] = var8;
            var5[2] = var7;
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot39 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var10 = 0;
    var2 = var6[var10];
    var1 = undefined;
    var2 = var16.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var9 = 1;
    var2 = var6[var9];
    var2 = var16.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var8 = 2;
    var7 = var6[var8];
    var2 = metroImportAll;
    var2 = var2.bind(var1)(var7);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.ActivityIndicator;
    var _closure1_slot6 = var7;
    var7 = var2.Pressable;
    var _closure1_slot7 = var7;
    var2 = var2.View;
    var _closure1_slot8 = var2;
    var13 = 4;
    var2 = var6[var13];
    var2 = var16.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var16.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var16.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var16.bind(var1)(var2);
    var _closure1_slot12 = var2;
    var14 = 8;
    var2 = var6[var14];
    var2 = var16.bind(var1)(var2);
    var _closure1_slot13 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var16.bind(var1)(var2);
    var _closure1_slot14 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var16.bind(var1)(var2);
    var _closure1_slot15 = var2;
    var2 = 11;
    var2 = var6[var2];
    var2 = var16.bind(var1)(var2);
    var _closure1_slot16 = var2;
    var15 = 12;
    var2 = var6[var15];
    var2 = var5.bind(var1)(var2);
    var7 = var2.MetadataFields;
    var _closure1_slot17 = var7;
    var7 = var2.OperatorTypes;
    var _closure1_slot18 = var7;
    var7 = var2.GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE;
    var _closure1_slot19 = var7;
    var2 = var2.GUILD_ROLE_CONNECTION_APPLICATION_IDENTITY_CONNECTION_TYPE;
    var _closure1_slot20 = var2;
    var2 = 13;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.PlatformTypes;
    var _closure1_slot21 = var7;
    var7 = var2.UserSettingsSections;
    var _closure1_slot22 = var7;
    var7 = var2.AnalyticEvents;
    var _closure1_slot23 = var7;
    var7 = var2.MarketingURLs;
    var _closure1_slot24 = var7;
    var7 = var2.FRIEND_SYNC_PLATFORM_TYPES;
    var _closure1_slot25 = var7;
    var7 = var2.ACTIVITY_PLATFORM_TYPES;
    var _closure1_slot26 = var7;
    var7 = var2.Permissions;
    var _closure1_slot27 = var7;
    var2 = var2.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot28 = var2;
    var2 = 14;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.jsx;
    var _closure1_slot29 = var7;
    var7 = var2.jsxs;
    var _closure1_slot30 = var7;
    var2 = var2.Fragment;
    var _closure1_slot31 = var2;
    var2 = 15;
    var2 = var6[var2];
    var11 = var5.bind(var1)(var2);
    var7 = var11.createStyles;
    var2 = {};
    var12 = {};
    var12['padding'] = var15;
    var2['container'] = var12;
    var15 = 16;
    var12 = {'marginTop': 16, 'flexDirection': 'column'};
    var2['connectionsChecksGroups'] = var12;
    var12 = {'flexDirection': 'row', 'borderColor': null, 'borderWidth': 2, 'borderRadius': null, 'paddingHorizontal': 16, 'paddingVertical': 20, 'marginBottom': 16, 'width': '100%', 'alignItems': 'center', 'position': 'relative'};
    var17 = var6[var15];
    var17 = var16.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.BORDER_SUBTLE;
    var12['borderColor'] = var17;
    var17 = var6[var15];
    var17 = var16.bind(var1)(var17);
    var17 = var17.radii;
    var17 = var17.md;
    var12['borderRadius'] = var17;
    var17 = '100%';
    var2['connectionsChecksGroup'] = var12;
    var12 = {};
    var18 = var6[var15];
    var18 = var16.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.BACKGROUND_BASE_LOWEST;
    var12['borderColor'] = var18;
    var18 = var6[var15];
    var18 = var16.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.BACKGROUND_BASE_LOWEST;
    var12['backgroundColor'] = var18;
    var2['connectionsChecksGroupPassed'] = var12;
    var12 = {};
    var18 = var6[var15];
    var18 = var16.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.BORDER_SUBTLE;
    var12['backgroundColor'] = var18;
    var2['connectionsChecksGroupPlatformDisabled'] = var12;
    var12 = {'paddingVertical': 4, 'paddingHorizontal': 12, 'borderRadius': null, 'backgroundColor': null, 'position': 'absolute', 'top': 4294967288, 'right': 20};
    var18 = var6[var15];
    var18 = var16.bind(var1)(var18);
    var18 = var18.radii;
    var18 = var18.md;
    var12['borderRadius'] = var18;
    var18 = var6[var15];
    var18 = var16.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.BACKGROUND_FEEDBACK_CRITICAL;
    var12['backgroundColor'] = var18;
    var2['connectionsChecksGroupRequirementsNotMet'] = var12;
    var12 = {};
    var12['flex'] = var9;
    var2['connectionsChecksGroupTextContainer'] = var12;
    var12 = {'flexDirection': 'row', 'alignItems': 'center'};
    var2['connectionsChecksGroupTextNameContainer'] = var12;
    var12 = {};
    var12['marginLeft'] = var13;
    var18 = var6[var15];
    var18 = var16.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.TEXT_FEEDBACK_WARNING;
    var12['tintColor'] = var18;
    var2['connectionsChecksGroupTextNameInfoIcon'] = var12;
    var12 = {'tintColor': null, 'width': 24, 'height': 24};
    var18 = var6[var15];
    var18 = var16.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.TEXT_FEEDBACK_POSITIVE;
    var12['tintColor'] = var18;
    var2['connectionsChecksGroupCheckmark'] = var12;
    var12 = {'tintColor': null, 'width': 24, 'height': 24};
    var18 = var6[var15];
    var18 = var16.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.INTERACTIVE_TEXT_DEFAULT;
    var12['tintColor'] = var18;
    var2['connectionsChecksGroupCaret'] = var12;
    var12 = {};
    var12['marginTop'] = var13;
    var2['connectionsCheck'] = var12;
    var12 = {'width': 24, 'height': 24, 'marginRight': 12};
    var2['platformIcon'] = var12;
    var12 = {'flexDirection': 'row', 'alignItems': 'center', 'marginBottom': 4};
    var2['channelName'] = var12;
    var12 = {'tintColor': null, 'marginRight': 8, 'width': 24, 'height': 24};
    var18 = var6[var15];
    var18 = var16.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.TEXT_MUTED;
    var12['tintColor'] = var18;
    var2['channelNameIcon'] = var12;
    var12 = {};
    var18 = 'hidden';
    var12['overflow'] = var18;
    var2['channelNameText'] = var12;
    var12 = {'flexDirection': 'row', 'width': '100%', 'alignItems': 'center', 'marginBottom': 8};
    var2['header'] = var12;
    var12 = {};
    var12['width'] = var17;
    var2['content'] = var12;
    var12 = {};
    var12['marginBottom'] = var15;
    var2['footerText'] = var12;
    var12 = {'flexDirection': 'column', 'alignItems': 'flex-start', 'marginVertical': 24};
    var2['accountConnectedContainer'] = var12;
    var12 = {};
    var12['width'] = var17;
    var2['accountConnectedPreview'] = var12;
    var12 = {'marginTop': 8, 'borderRadius': null, 'borderWidth': 1};
    var17 = var6[var15];
    var17 = var16.bind(var1)(var17);
    var17 = var17.radii;
    var17 = var17.xs;
    var12['borderRadius'] = var17;
    var17 = var6[var15];
    var17 = var16.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.BORDER_SUBTLE;
    var12['borderColor'] = var17;
    var2['accountConnectedPreviewConnectedUserAccount'] = var12;
    var12 = {'marginTop': 16, 'width': '100%'};
    var2['accountConnectedPrivacy'] = var12;
    var12 = {'marginTop': 8, 'borderWidth': 1, 'borderColor': null, 'borderRadius': null, 'padding': 8, 'flexDirection': 'column'};
    var17 = var6[var15];
    var17 = var16.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.BORDER_SUBTLE;
    var12['borderColor'] = var17;
    var17 = var6[var15];
    var17 = var16.bind(var1)(var17);
    var17 = var17.radii;
    var17 = var17.xs;
    var12['borderRadius'] = var17;
    var2['accountConnectedPrivacyOptionsContainer'] = var12;
    var12 = {'flexDirection': 'row', 'alignItems': 'center', 'backgroundColor': null, 'paddingVertical': 12, 'paddingHorizontal': 8, 'borderTopStartRadius': 4, 'borderTopEndRadius': 4, 'marginTop': 16};
    var17 = var6[var15];
    var17 = var16.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_BASE_LOWEST;
    var12['backgroundColor'] = var17;
    var2['roleGranted'] = var12;
    var12 = {'overflow': 'hidden', 'marginRight': 24};
    var2['roleGrantedName'] = var12;
    var12 = {};
    var12['marginRight'] = var14;
    var2['verifiedIcon'] = var12;
    var12 = {'flexDirection': 'column', 'backgroundColor': null, 'padding': 16, 'borderBottomStartRadius': 4, 'borderBottomEndRadius': 4, 'marginBottom': 24};
    var15 = var6[var15];
    var15 = var16.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_MOD_NORMAL;
    var12['backgroundColor'] = var15;
    var2['channelsGranted'] = var12;
    var12 = {};
    var12['marginTop'] = var14;
    var2['manageConnectionsButton'] = var12;
    var12 = {'marginTop': 24, 'marginBottom': 32, 'alignSelf': 'center'};
    var2['loading'] = var12;
    var12 = {};
    var12['marginRight'] = var14;
    var2['appIcon'] = var12;
    var12 = {};
    var12['marginLeft'] = var13;
    var2['botTag'] = var12;
    var2 = var7.bind(var11)(var2);
    var _closure1_slot32 = var2;
    var2 = {};
    var2['CHECKS_REQUIRED'] = var10;
    var7 = 'CHECKS_REQUIRED';
    var2[var10] = var7;
    var2['ACCOUNT_CONNECTED'] = var9;
    var7 = 'ACCOUNT_CONNECTED';
    var2[var9] = var7;
    var2['ROLE_GRANTED'] = var8;
    var7 = 'ROLE_GRANTED';
    var2[var8] = var7;
    var _closure1_slot33 = var2;
    var2 = 61;
    var2 = var6[var2];
    var6 = var5.bind(var1)(var2);
    var5 = var6.fileFinishedImporting;
    var2 = 'modules/connections/native/GuildRoleConnectionsConnectAccountsActionSheet.tsx';
    var2 = var5.bind(var6)(var2);
    var2 = function GuildRoleConnectionsConnectAccountsActionSheet(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var2 = arg1;
            var12 = var2.guildId;
            var _closure2_slot0 = var12;
            var1 = var2.role;
            var _closure2_slot1 = var1;
            var3 = var2.initialAttemptedPlatformType;
            var _closure2_slot2 = var3;
            var4 = var2.initialAttemptedApplicationId;
            var _closure2_slot3 = var4;
            var2 = var2.onCloseModal;
            var _closure2_slot4 = var2;
            var4 = undefined;
            var _closure2_slot7 = var4;
            var _closure2_slot15 = var4;
            var _closure2_slot23 = var4;
            var _closure2_slot25 = var4;
            var _closure2_slot27 = var4;
            var _closure2_slot29 = var4;
            var2 = function handleClose() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var1 = undefined;
                    var2 = true;
                    if(!(var2 === var1)) { _fun0018_ip = 182; continue _fun0018 }
case 183:
                    var2 = false;
case 182:
                    if(!var2) { _fun0018_ip = 184; continue _fun0018 }
case 50:
                    var4 = _closure2_slot4;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0018_ip = 184; continue _fun0018 }
case 185:
                    var2 = _closure2_slot4;
                    var2 = var2.bind(var1)();
case 184:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 46;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    return var1;
                }
            };
            var _closure2_slot34 = var2;
            var2 = function handleManageConnections() {
                var3 = _closure2_slot34;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 47;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.openUserSettings;
                var2 = {};
                var5 = _closure1_slot22;
                var5 = var5.CONNECTIONS;
                var2['screen'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var _closure2_slot35 = var2;
            var2 = function handleManageAuthorizedApplications() {
                var3 = _closure2_slot34;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 47;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.openUserSettings;
                var2 = {};
                var5 = _closure1_slot22;
                var5 = var5.AUTHORIZED_APPS;
                var2['screen'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var _closure2_slot36 = var2;
            var2 = function _handleAssignRole() {
                var4 = undefined;
                var1 = undefined;
                var3 = _closure1_slot3;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0019_ip = 12; continue _fun0019 }
case 186:
                            var5 = _closure2_slot15;
                            var3 = undefined;
                            var4 = true;
                            var4 = var5.bind(var3)(var4);
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var4 = 43;
                            var4 = var6[var4];
                            var6 = var5.bind(var3)(var4);
                            var5 = var6.assignGuildRoleConnection;
                            var4 = _closure2_slot0;
                            var2 = _closure2_slot1;
                            var2 = var2.id;
                            var2 = var5.bind(var6)(var4, var2);
                            SaveGenerator(address=75);
case 52:
                            return var2;
case 187:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0019_ip = 188; continue _fun0019 }
case 189:
                            return var3;
case 188:
                            return var2;
case 12:
                            return var1;
                        }
                    };
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                _closure2_slot37 = var4;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var _closure2_slot37 = var2;
            var2 = function reopenSelf(arg1, arg2) {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var11 = arg1;
                    var10 = arg2;
                    var8 = arguments[2];
                    var1 = undefined;
                    if(!(var8 === var1)) { _fun0020_ip = 190; continue _fun0020 }
case 191:
                    var8 = {};
case 190:
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 46;
                    var3 = var7[var3];
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.openLazy;
                    var3 = global;
                    var9 = var3.Promise;
                    var4 = var9.resolve;
                    var3 = {};
                    var12 = _closure1_slot40;
                    var3['default'] = var12;
                    var4 = var4.bind(var9)(var3);
                    var3 = _closure1_slot0;
                    var2 = 48;
                    var2 = var7[var2];
                    var12 = var3.bind(var1)(var2);
                    var3 = var12.makeGuildRoleConnectionsConnectAccountsActionSheetKey;
                    var9 = _closure2_slot1;
                    var2 = var9.id;
                    var3 = var3.bind(var12)(var2);
                    var2 = {};
                    var2['role'] = var9;
                    var9 = _closure2_slot0;
                    var2['guildId'] = var9;
                    var2['initialAttemptedPlatformType'] = var11;
                    var9 = null;
                    var11 = var9 != var11;
                    if(!var11) { _fun0020_ip = 95; continue _fun0020 }
case 18:
                    var9 = var10;
case 95:
                    var2['initialAttemptedApplicationId'] = var9;
                    var8 = var8.overrideUrl;
                    var2['overrideUrl'] = var8;
                    var7 = _closure2_slot4;
                    var2['onCloseModal'] = var7;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    return var1;
                }
            };
            var _closure2_slot38 = var2;
            var2 = function handlePlatformAttempt() {
                var3 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 44;
                var2 = var9[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.track;
                var2 = _closure1_slot23;
                var3 = var2.PASSPORT_CHALLENGE_STARTED;
                var2 = {};
                var8 = _closure2_slot1;
                var8 = var8.id;
                var2['role_id'] = var8;
                var8 = _closure1_slot0;
                var7 = 45;
                var7 = var9[var7];
                var8 = var8.bind(var1)(var7);
                var7 = var8.collectGuildAnalyticsMetadata;
                var6 = _closure2_slot0;
                var10 = var7.bind(var8)(var6);
                var11 = var2;
                var6 = copyDataProperties(var11, var10);
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var _closure2_slot39 = var2;
            var2 = function handlePlatformConnect(arg1, arg2) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var6 = arg1;
                    var5 = arg2;
                    var _closure3_slot0 = var6;
                    var _closure3_slot1 = var5;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 49;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = {};
                    var2['platformType'] = var6;
                    var6 = 'Verified Roles Connect Accounts Modal';
                    var2['location'] = var6;
                    var4 = function onClose() {
                        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                            var5 = _closure2_slot38;
                            var4 = _closure3_slot0;
                            var1 = _closure3_slot1;
                            var8 = null;
                            var3 = var8 == var1;
                            var1 = undefined;
                            var2 = undefined;
                            if(var3) { _fun0022_ip = 151; continue _fun0022 }
case 88:
                            var3 = _closure3_slot1;
                            var2 = var3.id;
case 151:
                            var6 = var8 != var2;
                            var3 = null;
                            if(!var6) { _fun0022_ip = 192; continue _fun0022 }
case 193:
                            var3 = var2;
case 192:
                            var2 = {};
                            var6 = _closure3_slot1;
                            var8 = var8 == var6;
                            var6 = undefined;
                            if(var8) { _fun0022_ip = 180; continue _fun0022 }
case 194:
                            var7 = _closure3_slot1;
                            var6 = var7.role_connections_verification_url;
case 180:
                            var2['overrideUrl'] = var6;
                            var2 = var5.bind(var1)(var4, var3, var2);
                            return var1;
                        }
                    };
                    var2['onClose'] = var4;
                    var4 = null;
                    var6 = var4 == var5;
                    var4 = undefined;
                    if(var6) { _fun0021_ip = 12; continue _fun0021 }
case 189:
                    var4 = var5.role_connections_verification_url;
case 12:
                    var2['overrideUrl'] = var4;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var _closure2_slot40 = var2;
            var2 = function handlePlatformIdentityAuthorize(arg1) {
                var1 = arg1;
                var12 = var1.applicationId;
                var _closure3_slot0 = var12;
                var9 = var1.scopes;
                var8 = var1.connectedAccountProvider;
                var1 = var1.wasAlreadyConnected;
                var _closure3_slot1 = var1;
                var4 = _closure1_slot1;
                var11 = _closure1_slot2;
                var1 = 46;
                var3 = var11[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var3 = var5.hideActionSheet;
                var3 = var3.bind(var5)();
                var3 = global;
                var3 = var3.HermesInternal;
                var5 = var3.concat;
                var3 = 'OAuth2AuthorizeModal-';
                var6 = var5.bind(var3)(var12);
                var _closure3_slot2 = var6;
                var3 = 50;
                var3 = var11[var3];
                var13 = var4.bind(var1)(var3);
                var10 = var13.subscribe;
                var5 = function handleModalClose(arg1) {
                    _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                        var1 = arg1;
                        var3 = var1.key;
                        var2 = _closure3_slot2;
                        if(!(var3 === var2)) { _fun0023_ip = 195; continue _fun0023 }
case 196:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 50;
                        var2 = var4[var2];
                        var4 = undefined;
                        var7 = var3.bind(var4)(var2);
                        var6 = var7.unsubscribe;
                        var3 = _closure3_slot3;
                        var2 = 'MODAL_POP';
                        var2 = var6.bind(var7)(var2, var3);
                        var3 = _closure2_slot38;
                        var6 = _closure3_slot1;
                        var2 = null;
                        if(var6) { _fun0023_ip = 103; continue _fun0023 }
case 55:
                        var2 = _closure1_slot20;
case 103:
                        var1 = _closure3_slot0;
                        var1 = var3.bind(var4)(var2, var1);
case 195:
                        var1 = undefined;
                        return var1;
                    }
                };
                var _closure3_slot3 = var5;
                var3 = 'MODAL_POP';
                var3 = var10.bind(var13)(var3, var5);
                var3 = 51;
                var3 = var11[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.pushLazy;
                var10 = _closure1_slot0;
                var2 = 53;
                var2 = var11[var2];
                var13 = var10.bind(var1)(var2);
                var2 = 52;
                var3 = var11[var2];
                var2 = var11.paths;
                var3 = var13.bind(var1)(var3, var2);
                var2 = {};
                var2['clientId'] = var12;
                var2['scopes'] = var9;
                var9 = 54;
                var9 = var11[var9];
                var9 = var10.bind(var1)(var9);
                var9 = var9.ApplicationIntegrationType;
                var9 = var9.USER_INSTALL;
                var2['integrationType'] = var9;
                var2['connectedAccountProvider'] = var8;
                var8 = function callback() {
                    var1 = undefined;
                    return var1;
                };
                var2['callback'] = var8;
                var7 = function dismissOAuthModal() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 51;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.popWithKey;
                    var1 = _closure3_slot2;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2['dismissOAuthModal'] = var7;
                var2 = var4.bind(var5)(var3, var2, var6);
                return var1;
            };
            var _closure2_slot41 = var2;
            var2 = function handlePlatformConnected(arg1, arg2) {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    var5 = arg2;
                    var6 = _closure2_slot23;
                    var1 = undefined;
                    var3 = arg1;
                    var3 = var6.bind(var1)(var3);
                    var3 = _closure2_slot25;
                    var3 = var3.bind(var1)(var5);
                    var7 = _closure2_slot7;
                    var6 = _closure1_slot33;
                    var6 = var6.ACCOUNT_CONNECTED;
                    var6 = var7.bind(var1)(var6);
                    var6 = _closure2_slot27;
                    var4 = null;
                    var6 = var6.bind(var1)(var4);
                    if(!(var4 != var5)) { _fun0024_ip = 19; continue _fun0024 }
case 197:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 55;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.fetchUserApplicationRoleConnections;
                    var5 = var3.bind(var4)();
                    var4 = var5.then;
                    var3 = function(arg1) {
                        var3 = _closure2_slot29;
                        var1 = undefined;
                        var2 = arg1;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.catch;
                    var2 = function() {
                        var1 = undefined;
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
case 19:
                    return var1;
                }
            };
            var _closure2_slot42 = var2;
            var2 = _closure1_slot32;
            var14 = var2.bind(var4)();
            var _closure2_slot5 = var14;
            var6 = _closure1_slot5;
            var5 = var6.useState;
            var10 = _closure1_slot33;
            var2 = var10.CHECKS_REQUIRED;
            var5 = var5.bind(var6)(var2);
            var2 = _closure1_slot4;
            var23 = 2;
            var2 = var2.bind(var4)(var5, var23);
            var20 = 0;
            var15 = var2[var20];
            var _closure2_slot6 = var15;
            var18 = 1;
            var2 = var2[var18];
            _closure2_slot7 = var2;
            var5 = _closure1_slot5;
            var2 = var5.useState;
            var8 = null;
            var5 = var2.bind(var5)(var8);
            var2 = _closure1_slot4;
            var2 = var2.bind(var4)(var5, var23);
            var5 = var2[var20];
            var _closure2_slot8 = var5;
            var2 = var2[var18];
            var _closure2_slot9 = var2;
            var5 = _closure1_slot5;
            var2 = var5.useState;
            var6 = false;
            var5 = var2.bind(var5)(var6);
            var2 = _closure1_slot4;
            var2 = var2.bind(var4)(var5, var23);
            var5 = var2[var20];
            var _closure2_slot10 = var5;
            var2 = var2[var18];
            var _closure2_slot11 = var2;
            var5 = _closure1_slot5;
            var2 = var5.useState;
            var7 = true;
            var5 = var2.bind(var5)(var7);
            var2 = _closure1_slot4;
            var2 = var2.bind(var4)(var5, var23);
            var5 = var2[var20];
            var _closure2_slot12 = var5;
            var2 = var2[var18];
            var _closure2_slot13 = var2;
            var5 = _closure1_slot5;
            var2 = var5.useState;
            var5 = var2.bind(var5)(var6);
            var2 = _closure1_slot4;
            var2 = var2.bind(var4)(var5, var23);
            var19 = var2[var20];
            var _closure2_slot14 = var19;
            var2 = var2[var18];
            _closure2_slot15 = var2;
            var5 = _closure1_slot5;
            var2 = var5.useState;
            var5 = var2.bind(var5)(var7);
            var2 = _closure1_slot4;
            var2 = var2.bind(var4)(var5, var23);
            var5 = var2[var20];
            var _closure2_slot16 = var5;
            var2 = var2[var18];
            var _closure2_slot17 = var2;
            var5 = _closure1_slot5;
            var2 = var5.useState;
            var5 = var2.bind(var5)(var6);
            var2 = _closure1_slot4;
            var2 = var2.bind(var4)(var5, var23);
            var5 = var2[var20];
            var _closure2_slot18 = var5;
            var2 = var2[var18];
            var _closure2_slot19 = var2;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var7 = 41;
            var6 = var5[var7];
            var17 = var2.bind(var4)(var6);
            var16 = var17.useStateFromStores;
            var6 = _closure1_slot14;
            var11 = new Array(1);
            var11[0] = var6;
            var6 = function() {
                var2 = _closure1_slot14;
                var1 = var2.getAccounts;
                var1 = var1.bind(var2)();
                return var1;
            };
            var22 = var16.bind(var17)(var11, var6);
            var _closure2_slot20 = var22;
            var6 = var5[var7];
            var17 = var2.bind(var4)(var6);
            var16 = var17.useStateFromStores;
            var6 = _closure1_slot12;
            var11 = new Array(1);
            var11[0] = var6;
            var6 = function() {
                var2 = _closure1_slot12;
                var1 = var2.getNewestTokens;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var16.bind(var17)(var11, var6);
            var11 = var5[var7];
            var21 = var2.bind(var4)(var11);
            var17 = var21.useStateFromStores;
            var11 = _closure1_slot11;
            var16 = new Array(1);
            var16[0] = var11;
            var11 = function() {
                var2 = _closure1_slot11;
                var1 = var2.getId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var11 = var17.bind(var21)(var16, var11);
            var _closure2_slot21 = var11;
            var16 = _closure1_slot5;
            var11 = var16.useState;
            var16 = var11.bind(var16)(var8);
            var11 = _closure1_slot4;
            var11 = var11.bind(var4)(var16, var23);
            var16 = var11[var20];
            var _closure2_slot22 = var16;
            var11 = var11[var18];
            _closure2_slot23 = var11;
            var17 = _closure1_slot5;
            var11 = var17.useState;
            var17 = var11.bind(var17)(var8);
            var11 = _closure1_slot4;
            var17 = var11.bind(var4)(var17, var23);
            var11 = var17[var20];
            var _closure2_slot24 = var11;
            var17 = var17[var18];
            _closure2_slot25 = var17;
            var24 = _closure1_slot5;
            var21 = var24.useState;
            var17 = function() {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var3 = null;
                    var2 = var3 != var1;
                    var1 = null;
                    if(!var2) { _fun0025_ip = 154; continue _fun0025 }
case 39:
                    var2 = {};
                    var5 = _closure2_slot2;
                    var2['platformType'] = var5;
                    var5 = _closure2_slot3;
                    var5 = var3 != var5;
                    var3 = null;
                    if(!var5) { _fun0025_ip = 198; continue _fun0025 }
case 199:
                    var3 = _closure2_slot3;
case 198:
                    var2['applicationId'] = var3;
                    var1 = var2;
case 154:
                    return var1;
                }
            };
            var21 = var21.bind(var24)(var17);
            var17 = _closure1_slot4;
            var17 = var17.bind(var4)(var21, var23);
            var21 = var17[var20];
            var _closure2_slot26 = var21;
            var17 = var17[var18];
            _closure2_slot27 = var17;
            var21 = _closure1_slot5;
            var17 = var21.useState;
            var21 = var17.bind(var21)(var8);
            var17 = _closure1_slot4;
            var17 = var17.bind(var4)(var21, var23);
            var20 = var17[var20];
            var _closure2_slot28 = var20;
            var17 = var17[var18];
            _closure2_slot29 = var17;
            var18 = _closure1_slot1;
            var17 = 17;
            var17 = var5[var17];
            var17 = var18.bind(var4)(var17);
            var17 = var17.bind(var4)();
            var _closure2_slot30 = var17;
            var17 = var5[var7];
            var21 = var2.bind(var4)(var17);
            var20 = var21.useStateFromStores;
            var17 = _closure1_slot15;
            var18 = new Array(1);
            var18[0] = var17;
            var17 = function() {
                var4 = _closure1_slot15;
                var3 = var4.getMember;
                var2 = _closure2_slot0;
                var1 = _closure2_slot21;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var17 = var20.bind(var21)(var18, var17);
            var _closure2_slot31 = var17;
            var18 = var5[var7];
            var23 = var2.bind(var4)(var18);
            var21 = var23.useStateFromStores;
            var18 = _closure1_slot13;
            var20 = new Array(1);
            var20[0] = var18;
            var18 = function() {
                var3 = _closure1_slot13;
                var2 = var3.getMutableGuildChannelsForGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var20 = var21.bind(var23)(var20, var18);
            var7 = var5[var7];
            var23 = var2.bind(var4)(var7);
            var21 = var23.useStateFromStores;
            var7 = _closure1_slot9;
            var18 = new Array(1);
            var18[0] = var7;
            var7 = function() {
                var1 = _closure1_slot9;
                var1 = var1.locale;
                return var1;
            };
            var7 = var21.bind(var23)(var18, var7);
            var _closure2_slot32 = var7;
            var7 = global;
            var18 = var7.Object;
            var7 = var18.values;
            var20 = var7.bind(var18)(var20);
            var18 = var20.filter;
            var7 = function(arg1) {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                    var4 = arg1;
                    var5 = _closure1_slot16;
                    var3 = var5.can;
                    var1 = _closure1_slot27;
                    var1 = var1.VIEW_CHANNEL;
                    var1 = var3.bind(var5)(var1, var4);
                    if(!var1) { _fun0026_ip = 8; continue _fun0026 }
case 174:
                    var6 = _closure1_slot16;
                    var5 = var6.can;
                    var3 = _closure1_slot27;
                    var3 = var3.SEND_MESSAGES;
                    var1 = var5.bind(var6)(var3, var4);
case 8:
                    if(!var1) { _fun0026_ip = 200; continue _fun0026 }
case 105:
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 42;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var5.bind(var3)(var2);
                    var4 = var2.bind(var3)(var4);
                    var3 = var4.includes;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
case 200:
                    return var1;
                }
            };
            var18 = var18.bind(var20)(var7);
            var _closure2_slot33 = var18;
            var21 = _closure1_slot5;
            var20 = var21.useEffect;
            var7 = new Array(4);
            var7[0] = var12;
            var23 = var1.id;
            var7[1] = var23;
            var7[2] = var22;
            var7[3] = var6;
            var6 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 43;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.fetchGuildRoleConnectionsEligibility;
                var3 = _closure2_slot0;
                var2 = _closure2_slot1;
                var2 = var2.id;
                var4 = var4.bind(var5)(var3, var2);
                var3 = var4.then;
                var2 = function(arg1) {
                    var5 = arg1;
                    var3 = _closure2_slot9;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var5);
                    var4 = _closure2_slot11;
                    var3 = function checkEligibility(arg1) {
                        var3 = arg1;
                        var2 = var3.some;
                        var1 = function(arg1) {
                            var3 = arg1;
                            var2 = var3.every;
                            var1 = function(arg1) {
                                var1 = arg1;
                                var1 = var1.result;
                                return var1;
                            };
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var3 = var3.bind(var1)(var5);
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot13;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var6 = var20.bind(var21)(var6, var7);
            var20 = _closure1_slot5;
            var7 = var20.useEffect;
            var6 = new Array(3);
            var6[0] = var3;
            var3 = var1.id;
            var6[1] = var3;
            var6[2] = var12;
            var3 = function() {
                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var1 = null;
                    if(!(var1 == var2)) { _fun0027_ip = 201; continue _fun0027 }
case 50:
                    var2 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 44;
                    var1 = var9[var1];
                    var8 = undefined;
                    var4 = var2.bind(var8)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot23;
                    var2 = var1.PASSPORT_CHALLENGE_VIEWED;
                    var1 = {};
                    var7 = _closure2_slot1;
                    var7 = var7.id;
                    var1['role_id'] = var7;
                    var7 = _closure1_slot0;
                    var6 = 45;
                    var6 = var9[var6];
                    var7 = var7.bind(var8)(var6);
                    var6 = var7.collectGuildAnalyticsMetadata;
                    var5 = _closure2_slot0;
                    var10 = var6.bind(var7)(var5);
                    var11 = var1;
                    var5 = copyDataProperties(var11, var10);
                    var1 = var3.bind(var4)(var2, var1);
case 201:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var7.bind(var20)(var3, var6);
            var7 = _closure1_slot5;
            var6 = var7.useEffect;
            var3 = new Array(5);
            var3[0] = var19;
            var18 = var18.length;
            var3[1] = var18;
            var3[2] = var17;
            var3[3] = var12;
            var1 = var1.id;
            var3[4] = var1;
            var1 = function() {
                _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                    var1 = _closure2_slot14;
                    if(!var1) { _fun0028_ip = 150; continue _fun0028 }
case 182:
                    var3 = _closure2_slot31;
                    var2 = null;
                    var1 = var2 != var3;
case 150:
                    if(!var1) { _fun0028_ip = 192; continue _fun0028 }
case 51:
                    var2 = _closure2_slot31;
                    var4 = var2.roles;
                    var3 = var4.includes;
                    var2 = _closure2_slot1;
                    var2 = var2.id;
                    var1 = var3.bind(var4)(var2);
case 192:
                    if(!var1) { _fun0028_ip = 202; continue _fun0028 }
case 203:
                    var2 = _closure2_slot15;
                    var8 = undefined;
                    var1 = false;
                    var1 = var2.bind(var8)(var1);
                    var1 = _closure2_slot33;
                    var2 = var1.length;
                    var1 = 0;
                    if(!(!(var2 > var1))) { _fun0028_ip = 3; continue _fun0028 }
case 103:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 46;
                    var1 = var3[var1];
                    var2 = var2.bind(var8)(var1);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
                    _fun0028_ip = 157; continue _fun0028;
case 3:
                    var2 = _closure2_slot7;
                    var1 = _closure1_slot33;
                    var1 = var1.ROLE_GRANTED;
                    var1 = var2.bind(var8)(var1);
case 157:
                    var2 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 44;
                    var1 = var9[var1];
                    var4 = var2.bind(var8)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot23;
                    var2 = var1.PASSPORT_CHALLENGE_FINISHED;
                    var1 = {};
                    var7 = _closure2_slot1;
                    var7 = var7.id;
                    var1['role_id'] = var7;
                    var7 = _closure1_slot0;
                    var6 = 45;
                    var6 = var9[var6];
                    var7 = var7.bind(var8)(var6);
                    var6 = var7.collectGuildAnalyticsMetadata;
                    var5 = _closure2_slot0;
                    var10 = var6.bind(var7)(var5);
                    var11 = var1;
                    var5 = copyDataProperties(var11, var10);
                    var1 = var3.bind(var4)(var2, var1);
case 202:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var6.bind(var7)(var1, var3);
            var3 = _closure1_slot29;
            var1 = 56;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {};
            var7 = _closure1_slot30;
            var6 = _closure1_slot8;
            var5 = {};
            var12 = var14.container;
            var5['style'] = var12;
            var10 = var10.CHECKS_REQUIRED;
            if(!(var10 !== var15)) { _fun0017_ip = 204; continue _fun0017 }
case 205:
            var10 = _closure1_slot33;
            var10 = var10.ACCOUNT_CONNECTED;
            if(!(var10 !== var15)) { _fun0017_ip = 206; continue _fun0017 }
case 207:
            var10 = _closure1_slot33;
            var12 = var10.ROLE_GRANTED;
            var10 = null;
            if(!(var12 === var15)) { _fun0017_ip = 208; continue _fun0017 }
case 209:
            var17 = _closure1_slot29;
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var12 = 24;
            var12 = var22[var12];
            var12 = var21.bind(var4)(var12);
            var15 = var12.Text;
            var12 = {};
            var18 = 'heading-lg/extrabold';
            var12['variant'] = var18;
            var18 = var14.header;
            var12['style'] = var18;
            var18 = 25;
            var19 = var22[var18];
            var19 = var21.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var22[var18];
            var18 = var21.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.najNdz;
            var18 = var19.bind(var20)(var18);
            var12['children'] = var18;
            var10 = var17.bind(var4)(var15, var12);
            _fun0017_ip = 208; continue _fun0017;
case 206:
            var15 = _closure1_slot1;
            var17 = _closure1_slot2;
            var12 = 35;
            var12 = var17[var12];
            var19 = var15.bind(var4)(var12);
            var18 = var8 != var16;
            var12 = 'lastPlatformConnected is null';
            var12 = var19.bind(var4)(var18, var12);
            var12 = 18;
            var12 = var17[var12];
            var15 = var15.bind(var4)(var12);
            var12 = var15.get;
            var12 = var12.bind(var15)(var16);
            var15 = var8 == var12;
            var19 = undefined;
            if(var15) { _fun0017_ip = 210; continue _fun0017 }
case 211:
            var19 = var12.name;
case 210:
            if(!(var8 == var19)) { _fun0017_ip = 212; continue _fun0017 }
case 213:
            var12 = var8 == var11;
            var8 = undefined;
            if(var12) { _fun0017_ip = 214; continue _fun0017 }
case 215:
            var8 = var11.name;
case 214:
            var19 = var8;
case 212:
            var12 = _closure1_slot29;
            var16 = _closure1_slot0;
            var20 = _closure1_slot2;
            var8 = 24;
            var8 = var20[var8];
            var8 = var16.bind(var4)(var8);
            var11 = var8.Text;
            var8 = {};
            var15 = 'heading-lg/extrabold';
            var8['variant'] = var15;
            var15 = var14.header;
            var8['style'] = var15;
            var15 = 25;
            var17 = var20[var15];
            var17 = var16.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.format;
            var15 = var20[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.t;
            var16 = var15.yQvgBO;
            var15 = {};
            var15['platformName'] = var19;
            var15 = var17.bind(var18)(var16, var15);
            var8['children'] = var15;
            var10 = var12.bind(var4)(var11, var8);
            _fun0017_ip = 208; continue _fun0017;
case 204:
            var12 = _closure1_slot29;
            var11 = _closure1_slot8;
            var8 = {};
            var14 = var14.header;
            var8['style'] = var14;
            var15 = _closure1_slot29;
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var13 = 24;
            var13 = var20[var13];
            var13 = var19.bind(var4)(var13);
            var14 = var13.Text;
            var13 = {};
            var16 = 'heading-lg/extrabold';
            var13['variant'] = var16;
            var16 = 25;
            var17 = var20[var16];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var20[var16];
            var16 = var19.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.zOZh3R;
            var16 = var17.bind(var18)(var16);
            var13['children'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var8['children'] = var13;
            var10 = var12.bind(var4)(var11, var8);
case 208:
            var8 = new Array(3);
            var8[0] = var10;
            var10 = function renderContent() {
                _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                    var5 = _closure2_slot6;
                    var4 = _closure1_slot33;
                    var4 = var4.CHECKS_REQUIRED;
                    if(!(var4 !== var5)) { _fun0029_ip = 216; continue _fun0029 }
case 149:
                    var4 = _closure1_slot33;
                    var4 = var4.ACCOUNT_CONNECTED;
                    if(!(var4 !== var5)) { _fun0029_ip = 116; continue _fun0029 }
case 198:
                    var4 = _closure1_slot33;
                    var4 = var4.ROLE_GRANTED;
                    if(!(var4 !== var5)) { _fun0029_ip = 105; continue _fun0029 }
case 217:
                    var4 = null;
                    return var4;
case 105:
                    var7 = _closure1_slot30;
                    var6 = _closure1_slot8;
                    var5 = {};
                    var12 = _closure2_slot5;
                    var4 = var12.content;
                    var5['style'] = var4;
                    var10 = _closure1_slot30;
                    var9 = _closure1_slot8;
                    var8 = {};
                    var4 = var12.roleGranted;
                    var8['style'] = var4;
                    var15 = _closure1_slot29;
                    var13 = _closure1_slot1;
                    var17 = _closure1_slot2;
                    var4 = 59;
                    var11 = var17[var4];
                    var4 = undefined;
                    var14 = var13.bind(var4)(var11);
                    var11 = {};
                    var13 = _closure2_slot0;
                    var11['guildId'] = var13;
                    var13 = var12.verifiedIcon;
                    var11['style'] = var13;
                    var16 = _closure2_slot1;
                    var11['role'] = var16;
                    var13 = 24;
                    var11['size'] = var13;
                    var14 = var15.bind(var4)(var14, var11);
                    var11 = new Array(2);
                    var11[0] = var14;
                    var15 = _closure1_slot29;
                    var14 = _closure1_slot0;
                    var13 = var17[var13];
                    var13 = var14.bind(var4)(var13);
                    var14 = var13.Text;
                    var13 = {'variant': 'text-lg/semibold', 'color': 'mobile-text-heading-primary', 'lineClamp': 1};
                    var17 = var12.roleGrantedName;
                    var13['style'] = var17;
                    var16 = var16.name;
                    var13['children'] = var16;
                    var13 = var15.bind(var4)(var14, var13);
                    var11[1] = var13;
                    var8['children'] = var11;
                    var9 = var10.bind(var4)(var9, var8);
                    var8 = new Array(2);
                    var8[0] = var9;
                    var11 = _closure1_slot29;
                    var10 = _closure1_slot8;
                    var9 = {};
                    var12 = var12.channelsGranted;
                    var9['style'] = var12;
                    var14 = _closure2_slot33;
                    var13 = var14.map;
                    var12 = function(arg1) {
                        var1 = arg1;
                        var5 = _closure1_slot29;
                        var4 = _closure1_slot35;
                        var3 = {};
                        var3['channel'] = var1;
                        var2 = var1.id;
                        var1 = undefined;
                        var1 = var5.bind(var1)(var4, var3, var2);
                        return var1;
                    };
                    var12 = var13.bind(var14)(var12);
                    var9['children'] = var12;
                    var9 = var11.bind(var4)(var10, var9);
                    var8[1] = var9;
                    var5['children'] = var8;
                    var4 = var7.bind(var4)(var6, var5);
                    return var4;
case 116:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 35;
                    var4 = var6[var4];
                    var6 = undefined;
                    var7 = var5.bind(var6)(var4);
                    var4 = _closure2_slot22;
                    var14 = null;
                    var5 = var14 != var4;
                    var4 = 'lastPlatformConnected is null';
                    var4 = var7.bind(var6)(var5, var4);
                    var7 = _closure2_slot20;
                    var5 = var7.find;
                    var4 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.type;
                        var1 = _closure2_slot22;
                        var1 = var1 === var2;
                        return var1;
                    };
                    var27 = var5.bind(var7)(var4);
                    var4 = _closure2_slot28;
                    var4 = var14 == var4;
                    var23 = undefined;
                    if(var4) { _fun0029_ip = 26; continue _fun0029 }
case 218:
                    var5 = _closure2_slot28;
                    var4 = var5.find;
                    var1 = function(arg1) {
                        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                            var1 = arg1;
                            var1 = var1.application;
                            var2 = var1.id;
                            var4 = _closure2_slot24;
                            var1 = null;
                            var4 = var1 == var4;
                            var1 = undefined;
                            if(var4) { _fun0030_ip = 151; continue _fun0030 }
case 88:
                            var3 = _closure2_slot24;
                            var1 = var3.id;
case 151:
                            var1 = var2 === var1;
                            return var1;
                        }
                    };
                    var23 = var4.bind(var5)(var1);
case 26:
                    var5 = _closure1_slot30;
                    var4 = _closure1_slot8;
                    var1 = {};
                    var10 = _closure2_slot5;
                    var7 = var10.content;
                    var1['style'] = var7;
                    var9 = _closure1_slot29;
                    var8 = _closure1_slot8;
                    var7 = {};
                    var10 = var10.accountConnectedContainer;
                    var7['style'] = var10;
                    if(!(var14 == var27)) { _fun0029_ip = 219; continue _fun0029 }
case 220:
                    if(!(var14 != var23)) { _fun0029_ip = 221; continue _fun0029 }
case 219:
                    var12 = _closure1_slot30;
                    var11 = _closure1_slot31;
                    var10 = {};
                    var13 = var14 != var27;
                    var15 = null;
                    if(!var13) { _fun0029_ip = 222; continue _fun0029 }
case 223:
                    var17 = _closure1_slot30;
                    var16 = _closure1_slot31;
                    var13 = {};
                    var19 = _closure1_slot8;
                    var18 = {};
                    var24 = _closure2_slot5;
                    var20 = var24.accountConnectedPreview;
                    var18['style'] = var20;
                    var25 = _closure1_slot29;
                    var30 = _closure1_slot0;
                    var31 = _closure1_slot2;
                    var22 = 24;
                    var20 = var31[var22];
                    var20 = var30.bind(var6)(var20);
                    var21 = var20.Text;
                    var20 = {'variant': 'eyebrow', 'color': 'text-default'};
                    var26 = 25;
                    var28 = var31[var26];
                    var28 = var30.bind(var6)(var28);
                    var32 = var28.intl;
                    var29 = var32.string;
                    var28 = var31[var26];
                    var28 = var30.bind(var6)(var28);
                    var28 = var28.t;
                    var28 = var28.TOjkEg;
                    var28 = var29.bind(var32)(var28);
                    var20['children'] = var28;
                    var21 = var25.bind(var6)(var21, var20);
                    var20 = new Array(2);
                    var20[0] = var21;
                    var28 = _closure1_slot29;
                    var21 = 58;
                    var21 = var31[var21];
                    var21 = var30.bind(var6)(var21);
                    var25 = var21.ConnectedUserAccount;
                    var21 = {};
                    var21['account'] = var27;
                    var29 = _closure2_slot21;
                    var21['userId'] = var29;
                    var29 = _closure2_slot30;
                    var21['theme'] = var29;
                    var29 = _closure2_slot32;
                    var21['locale'] = var29;
                    var29 = var24.accountConnectedPreviewConnectedUserAccount;
                    var21['style'] = var29;
                    var29 = _closure2_slot16;
                    var21['showMetadata'] = var29;
                    var29 = _closure2_slot18;
                    var21['showInvisibleIcon'] = var29;
                    var21 = var28.bind(var6)(var25, var21);
                    var20[1] = var21;
                    var18['children'] = var20;
                    var19 = var17.bind(var6)(var19, var18);
                    var18 = new Array(2);
                    var18[0] = var19;
                    var21 = _closure1_slot30;
                    var20 = _closure1_slot8;
                    var19 = {};
                    var24 = var24.accountConnectedPrivacy;
                    var19['style'] = var24;
                    var25 = _closure1_slot29;
                    var22 = var31[var22];
                    var22 = var30.bind(var6)(var22);
                    var24 = var22.Text;
                    var22 = {'variant': 'eyebrow', 'color': 'text-default'};
                    var28 = var31[var26];
                    var28 = var30.bind(var6)(var28);
                    var29 = var28.intl;
                    var28 = var29.string;
                    var26 = var31[var26];
                    var26 = var30.bind(var6)(var26);
                    var26 = var26.t;
                    var26 = var26.jndPhX;
                    var26 = var28.bind(var29)(var26);
                    var22['children'] = var26;
                    var24 = var25.bind(var6)(var24, var22);
                    var22 = new Array(2);
                    var22[0] = var24;
                    var26 = _closure1_slot29;
                    var25 = _closure1_slot39;
                    var24 = {};
                    var24['account'] = var27;
                    var27 = _closure2_slot19;
                    var24['setShowPreviewInvisibleIcon'] = var27;
                    var27 = _closure2_slot17;
                    var24['setShowPreviewMetadata'] = var27;
                    var24 = var26.bind(var6)(var25, var24);
                    var22[1] = var24;
                    var19['children'] = var22;
                    var19 = var21.bind(var6)(var20, var19);
                    var18[1] = var19;
                    var13['children'] = var18;
                    var15 = var17.bind(var6)(var16, var13);
case 222:
                    var13 = new Array(2);
                    var13[0] = var15;
                    var15 = var14 != var23;
                    var14 = null;
                    if(!var15) { _fun0029_ip = 224; continue _fun0029 }
case 225:
                    var17 = _closure1_slot30;
                    var16 = _closure1_slot8;
                    var15 = {};
                    var22 = _closure2_slot5;
                    var18 = var22.accountConnectedPreview;
                    var15['style'] = var18;
                    var21 = _closure1_slot29;
                    var20 = _closure1_slot0;
                    var24 = _closure1_slot2;
                    var18 = 24;
                    var18 = var24[var18];
                    var18 = var20.bind(var6)(var18);
                    var19 = var18.Text;
                    var18 = {'variant': 'eyebrow', 'color': 'text-default'};
                    var25 = 25;
                    var26 = var24[var25];
                    var26 = var20.bind(var6)(var26);
                    var27 = var26.intl;
                    var26 = var27.string;
                    var25 = var24[var25];
                    var25 = var20.bind(var6)(var25);
                    var25 = var25.t;
                    var25 = var25.TOjkEg;
                    var25 = var26.bind(var27)(var25);
                    var18['children'] = var25;
                    var19 = var21.bind(var6)(var19, var18);
                    var18 = new Array(2);
                    var18[0] = var19;
                    var21 = _closure1_slot29;
                    var19 = 58;
                    var19 = var24[var19];
                    var19 = var20.bind(var6)(var19);
                    var20 = var19.ConnectedApplicationUserRoleAccount;
                    var19 = {};
                    var19['applicationRoleConnection'] = var23;
                    var23 = _closure2_slot30;
                    var19['theme'] = var23;
                    var23 = _closure2_slot32;
                    var19['locale'] = var23;
                    var22 = var22.accountConnectedPreviewConnectedUserAccount;
                    var19['style'] = var22;
                    var19 = var21.bind(var6)(var20, var19);
                    var18[1] = var19;
                    var15['children'] = var18;
                    var14 = var17.bind(var6)(var16, var15);
case 224:
                    var13[1] = var14;
                    var10['children'] = var13;
                    var10 = var12.bind(var6)(var11, var10);
                    _fun0029_ip = 226; continue _fun0029;
case 221:
                    var13 = _closure1_slot29;
                    var12 = _closure1_slot6;
                    var11 = {};
                    var14 = 'large';
                    var11['size'] = var14;
                    var14 = _closure2_slot5;
                    var14 = var14.loading;
                    var11['style'] = var14;
                    var10 = var13.bind(var6)(var12, var11);
case 226:
                    var7['children'] = var10;
                    var8 = var9.bind(var6)(var8, var7);
                    var7 = new Array(2);
                    var7[0] = var8;
                    var10 = _closure1_slot29;
                    var12 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var8 = 57;
                    var8 = var15[var8];
                    var8 = var12.bind(var6)(var8);
                    var9 = var8.TextWithIOSLinkWorkaround;
                    var8 = {'variant': 'text-md/normal', 'color': 'text-default'};
                    var11 = 25;
                    var13 = var15[var11];
                    var13 = var12.bind(var6)(var13);
                    var14 = var13.intl;
                    var13 = var14.format;
                    var11 = var15[var11];
                    var11 = var12.bind(var6)(var11);
                    var11 = var11.t;
                    var12 = var11.gsgvxh;
                    var11 = {};
                    var15 = _closure1_slot24;
                    var15 = var15.PRIVACY;
                    var11['privacyPolicyUrl'] = var15;
                    var15 = _closure2_slot36;
                    var11['onAuthorizedApplicationsClick'] = var15;
                    var15 = _closure2_slot35;
                    var11['onConnectionsClick'] = var15;
                    var11 = var13.bind(var14)(var12, var11);
                    var8['children'] = var11;
                    var8 = var10.bind(var6)(var9, var8);
                    var7[1] = var8;
                    var1['children'] = var7;
                    var1 = var5.bind(var6)(var4, var1);
                    return var1;
case 216:
                    var1 = _closure2_slot8;
                    var14 = null;
                    var11 = var14 != var1;
                    if(!var11) { _fun0029_ip = 227; continue _fun0029 }
case 228:
                    var1 = _closure2_slot8;
                    var4 = var1.length;
                    var1 = 1;
                    var11 = var4 > var1;
case 227:
                    var1 = _closure2_slot8;
                    var16 = var14 != var1;
                    if(!var16) { _fun0029_ip = 229; continue _fun0029 }
case 230:
                    var1 = _closure2_slot8;
                    var4 = var1.length;
                    var1 = 1;
                    var16 = var1 === var4;
case 229:
                    if(!var16) { _fun0029_ip = 231; continue _fun0029 }
case 232:
                    var4 = _closure2_slot8;
                    var1 = 0;
                    var1 = var4[var1];
                    var4 = var1.length;
                    var1 = 1;
                    var16 = var1 === var4;
case 231:
                    var1 = _closure2_slot12;
                    if(var1) { _fun0029_ip = 233; continue _fun0029 }
case 234:
                    var1 = _closure2_slot8;
                    if(!(var14 != var1)) { _fun0029_ip = 233; continue _fun0029 }
case 235:
                    var6 = _closure1_slot30;
                    var5 = _closure1_slot8;
                    var4 = {};
                    var1 = _closure2_slot5;
                    var1 = var1.content;
                    var4['style'] = var1;
                    var9 = _closure1_slot29;
                    var12 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 24;
                    var7 = var10[var1];
                    var1 = undefined;
                    var7 = var12.bind(var1)(var7);
                    var8 = var7.Text;
                    var7 = {'variant': 'text-md/medium', 'color': 'text-default'};
                    var15 = 25;
                    var10 = var10[var15];
                    var10 = var12.bind(var1)(var10);
                    var13 = var10.intl;
                    var12 = var13.format;
                    var17 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var10 = var10[var15];
                    var10 = var17.bind(var1)(var10);
                    var10 = var10.t;
                    if(var16) { _fun0029_ip = 236; continue _fun0029 }
case 237:
                    if(var11) { _fun0029_ip = 238; continue _fun0029 }
case 239:
                    var11 = var10.U0olLg;
                    _fun0029_ip = 240; continue _fun0029;
case 238:
                    var11 = var10.mOQ8k+;
case 240:
                    _fun0029_ip = 241; continue _fun0029;
case 236:
                    var11 = var10.jHfRvZ;
case 241:
                    var10 = {};
                    var16 = _closure2_slot1;
                    var16 = var16.name;
                    var10['roleName'] = var16;
                    var10 = var12.bind(var13)(var11, var10);
                    var7['children'] = var10;
                    var8 = var9.bind(var1)(var8, var7);
                    var7 = new Array(3);
                    var7[0] = var8;
                    var10 = _closure1_slot29;
                    var9 = _closure1_slot8;
                    var8 = {};
                    var11 = _closure2_slot5;
                    var11 = var11.connectionsChecksGroups;
                    var8['style'] = var11;
                    var13 = _closure1_slot29;
                    var12 = _closure1_slot38;
                    var11 = {};
                    var16 = _closure2_slot8;
                    var11['eligibilityStatesGroups'] = var16;
                    var16 = _closure2_slot39;
                    var11['onPlatformAttempt'] = var16;
                    var16 = _closure2_slot40;
                    var11['onPlatformConnect'] = var16;
                    var16 = _closure2_slot42;
                    var11['onPlatformConnected'] = var16;
                    var16 = _closure2_slot41;
                    var11['onPlatformIdentityAuthorize'] = var16;
                    var16 = _closure2_slot26;
                    var16 = var14 == var16;
                    var17 = undefined;
                    if(var16) { _fun0029_ip = 242; continue _fun0029 }
case 243:
                    var16 = _closure2_slot26;
                    var17 = var16.platformType;
case 242:
                    var18 = var14 != var17;
                    var16 = null;
                    if(!var18) { _fun0029_ip = 244; continue _fun0029 }
case 245:
                    var16 = var17;
case 244:
                    var11['initialAttemptedPlatformType'] = var16;
                    var16 = _closure2_slot26;
                    var17 = var14 == var16;
                    var16 = undefined;
                    if(var17) { _fun0029_ip = 246; continue _fun0029 }
case 247:
                    var17 = _closure2_slot26;
                    var16 = var17.applicationId;
case 246:
                    var17 = var14 != var16;
                    var14 = null;
                    if(!var17) { _fun0029_ip = 248; continue _fun0029 }
case 249:
                    var14 = var16;
case 248:
                    var11['initialAttemptedApplicationId'] = var14;
                    var11 = var13.bind(var1)(var12, var11);
                    var8['children'] = var11;
                    var8 = var10.bind(var1)(var9, var8);
                    var7[1] = var8;
                    var10 = _closure1_slot29;
                    var12 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var8 = 57;
                    var8 = var11[var8];
                    var8 = var12.bind(var1)(var8);
                    var9 = var8.TextWithIOSLinkWorkaround;
                    var8 = {'variant': 'text-xs/normal', 'style': null, 'color': 'text-default'};
                    var13 = _closure2_slot5;
                    var13 = var13.footerText;
                    var8['style'] = var13;
                    var13 = var11[var15];
                    var13 = var12.bind(var1)(var13);
                    var14 = var13.intl;
                    var13 = var14.format;
                    var11 = var11[var15];
                    var11 = var12.bind(var1)(var11);
                    var11 = var11.t;
                    var12 = var11.gsgvxh;
                    var11 = {};
                    var15 = _closure1_slot24;
                    var15 = var15.PRIVACY;
                    var11['privacyPolicyUrl'] = var15;
                    var15 = _closure2_slot36;
                    var11['onAuthorizedApplicationsClick'] = var15;
                    var15 = _closure2_slot35;
                    var11['onConnectionsClick'] = var15;
                    var11 = var13.bind(var14)(var12, var11);
                    var8['children'] = var11;
                    var8 = var10.bind(var1)(var9, var8);
                    var7[2] = var8;
                    var4['children'] = var7;
                    var1 = var6.bind(var1)(var5, var4);
                    _fun0029_ip = 250; continue _fun0029;
case 233:
                    var5 = _closure1_slot29;
                    var4 = _closure1_slot6;
                    var3 = {};
                    var6 = 'large';
                    var3['size'] = var6;
                    var2 = _closure2_slot5;
                    var2 = var2.loading;
                    var3['style'] = var2;
                    var2 = undefined;
                    var1 = var5.bind(var2)(var4, var3);
case 250:
                    return var1;
                }
            };
            var10 = var10.bind(var4)();
            var8[1] = var10;
            var9 = function renderFooter() {
                _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                    var2 = _closure2_slot6;
                    var1 = _closure1_slot33;
                    var1 = var1.CHECKS_REQUIRED;
                    if(!(var1 !== var2)) { _fun0031_ip = 251; continue _fun0031 }
case 149:
                    var1 = _closure1_slot33;
                    var1 = var1.ACCOUNT_CONNECTED;
                    if(!(var1 !== var2)) { _fun0031_ip = 252; continue _fun0031 }
case 198:
                    var1 = _closure2_slot8;
                    var9 = null;
                    var2 = var9 == var1;
                    var4 = undefined;
                    var1 = undefined;
                    if(var2) { _fun0031_ip = 253; continue _fun0031 }
case 254:
                    var3 = _closure2_slot8;
                    var2 = var3.flat;
                    var8 = var2.bind(var3)();
                    var3 = var8.some;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.application_id;
                        var1 = null;
                        var1 = var1 == var2;
                        return var1;
                    };
                    var1 = var3.bind(var8)(var2);
case 253:
                    var10 = var9 != var1;
                    if(!var10) { _fun0031_ip = 255; continue _fun0031 }
case 256:
                    var10 = var1;
case 255:
                    var3 = _closure1_slot30;
                    var2 = _closure1_slot31;
                    var1 = {};
                    var12 = _closure1_slot29;
                    var17 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var13 = 60;
                    var8 = var14[var13];
                    var8 = var17.bind(var4)(var8);
                    var11 = var8.Button;
                    var8 = {};
                    var15 = 'primary';
                    var8['variant'] = var15;
                    var15 = function onPress() {
                        var3 = _closure2_slot34;
                        var1 = undefined;
                        var2 = true;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var8['onPress'] = var15;
                    var21 = 25;
                    var15 = var14[var21];
                    var15 = var17.bind(var4)(var15);
                    var16 = var15.intl;
                    var15 = var16.string;
                    var14 = var14[var21];
                    var14 = var17.bind(var4)(var14);
                    var14 = var14.t;
                    var14 = var14.cpT0Cq;
                    var14 = var15.bind(var16)(var14);
                    var8['text'] = var14;
                    var16 = true;
                    var8['grow'] = var16;
                    var11 = var12.bind(var4)(var11, var8);
                    var8 = new Array(2);
                    var8[0] = var11;
                    var9 = null;
                    if(!var10) { _fun0031_ip = 125; continue _fun0031 }
case 257:
                    var12 = _closure1_slot29;
                    var11 = _closure1_slot8;
                    var10 = {};
                    var14 = _closure2_slot5;
                    var14 = var14.manageConnectionsButton;
                    var10['style'] = var14;
                    var15 = _closure1_slot29;
                    var20 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var13 = var17[var13];
                    var13 = var20.bind(var4)(var13);
                    var14 = var13.Button;
                    var13 = {};
                    var18 = 'secondary';
                    var13['variant'] = var18;
                    var18 = _closure2_slot35;
                    var13['onPress'] = var18;
                    var18 = var17[var21];
                    var18 = var20.bind(var4)(var18);
                    var19 = var18.intl;
                    var18 = var19.string;
                    var17 = var17[var21];
                    var17 = var20.bind(var4)(var17);
                    var17 = var17.t;
                    var17 = var17.VXV55P;
                    var17 = var18.bind(var19)(var17);
                    var13['text'] = var17;
                    var13['grow'] = var16;
                    var13 = var15.bind(var4)(var14, var13);
                    var10['children'] = var13;
                    var9 = var12.bind(var4)(var11, var10);
case 125:
                    var8[1] = var9;
                    var1['children'] = var8;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
case 252:
                    var4 = _closure1_slot29;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var1 = 60;
                    var1 = var12[var1];
                    var3 = undefined;
                    var1 = var11.bind(var3)(var1);
                    var2 = var1.Button;
                    var1 = {};
                    var8 = 'primary';
                    var1['variant'] = var8;
                    var8 = function onPress() {
                        var3 = _closure2_slot7;
                        var1 = _closure1_slot33;
                        var2 = var1.CHECKS_REQUIRED;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1['onPress'] = var8;
                    var8 = 25;
                    var9 = var12[var8];
                    var9 = var11.bind(var3)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var8 = var12[var8];
                    var8 = var11.bind(var3)(var8);
                    var8 = var8.t;
                    var8 = var8.i4jeWR;
                    var8 = var9.bind(var10)(var8);
                    var1['text'] = var8;
                    var8 = true;
                    var1['grow'] = var8;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
case 251:
                    var4 = _closure1_slot29;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 60;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.Button;
                    var1 = {};
                    var8 = 'primary';
                    var1['variant'] = var8;
                    var6 = function onPress() {
                        var2 = function handleAssignRole() {
                            var1 = undefined;
                            var4 = _closure2_slot37;
                            var3 = var4.apply;
                            var1 = arguments;
                            var2 = var1;
                            var1 = this;
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        var1 = undefined;
                        var1 = var2.bind(var1)();
                        return var1;
                    };
                    var1['onPress'] = var6;
                    var6 = _closure2_slot12;
                    if(var6) { _fun0031_ip = 179; continue _fun0031 }
case 129:
                    var8 = _closure2_slot10;
                    var6 = !var8;
case 179:
                    if(var6) { _fun0031_ip = 258; continue _fun0031 }
case 259:
                    var6 = _closure2_slot14;
case 258:
                    var1['disabled'] = var6;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 25;
                    var6 = var9[var5];
                    var6 = var8.bind(var3)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var9[var5];
                    var5 = var8.bind(var3)(var5);
                    var5 = var5.t;
                    var5 = var5["8SuVoE"];
                    var5 = var6.bind(var7)(var5);
                    var1['text'] = var5;
                    var5 = true;
                    var1['grow'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var9 = var9.bind(var4)();
            var8[2] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot40 = var2;
    var3['default'] = var2;
    return var1;
})();