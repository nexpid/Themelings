// app/modules/rpc/native/server/commands/activities.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var4 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var12 = var2.RPC_AUTHENTICATED_SCOPE;
    var13 = var2.RPC_LOCAL_SCOPE;
    var11 = var2.RPC_SCOPE_CONFIG;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var4 = var2.InstantInviteSources;
    var _closure1_slot4 = var4;
    var4 = var2.RPCCommands;
    var2 = var2.RPCErrors;
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.NativePermissionTypes;
    var _closure1_slot6 = var2;
    var2 = {};
    var9 = var4.OPEN_INVITE_DIALOG;
    var7 = {};
    var14 = {};
    var16 = var11.ANY;
    var10 = 4;
    var15 = var6[var10];
    var15 = var5.bind(var1)(var15);
    var15 = var15.OAuth2Scopes;
    var17 = var15.RPC;
    var15 = new Array(3);
    var15[0] = var17;
    var15[1] = var13;
    var15[2] = var12;
    var14[var16] = var15;
    var7['scope'] = var14;
    var14 = function handler(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var9 = var1.socket;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 5;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = var3.validateOpenInviteDialog;
            var2 = var2.bind(var3)();
            var7 = var2.channel;
            var2 = var2.frame;
            var8 = null;
            if(!(var8 == var2)) { _fun0001_ip = 135; continue _fun0001 }
 61:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 7;
            var2 = var5[var2];
            var6 = var3.bind(var4)(var2);
            var5 = var6.showInstantInviteActionSheet;
            var2 = _closure1_slot4;
            var3 = var2.ACTIVITY_INVITE;
            var2 = {};
            var9 = var9.application;
            var9 = var9.id;
            var10 = var8 != var9;
            var8 = undefined;
            if(!var10) { _fun0001_ip = 121; continue _fun0001 }
 118:
            var8 = var9;
 121:
            var2['targetApplicationId'] = var8;
            var2 = var5.bind(var6)(var7, var3, var2);
            return var4;
 135:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 6;
            var2 = var5[var2];
            var4 = var3.bind(var4)(var2);
            var3 = {};
            var1 = _closure1_slot5;
            var1 = var1.UNKNOWN_ERROR;
            var3['errorCode'] = var1;
            var1 = var4.prototype;
            var2 = Object.create(var1, {constructor: {value: var4}});
            var12 = 'Cannot support frames (yet)';
            var14 = var2;
            var13 = var3;
            var1 = new var14[var4](var13, var12, var11);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var7['handler'] = var14;
    var2[var9] = var7;
    var7 = var4.INITIATE_IMAGE_UPLOAD;
    var4 = {};
    var9 = {};
    var11 = var11.ANY;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var10 = var10.OAuth2Scopes;
    var14 = var10.RPC;
    var10 = new Array(3);
    var10[0] = var14;
    var10[1] = var13;
    var10[2] = var12;
    var9[var11] = var10;
    var4['scope'] = var9;
    var8 = function handler(arg1) {
        var2 = arg1;
        var2 = var2.socket;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 740; continue _fun0002 }
 10:
                    var2 = _closure2_slot0;
                    var2 = var2.application;
                    var11 = var2.id;
                    var8 = null;
                    if(!(var8 != var11)) { _fun0002_ip = 667; continue _fun0002 }
 36:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 8;
                    var3 = var5[var3];
                    var5 = undefined;
                    var3 = var4.bind(var5)(var3);
                    var3 = var3.bind(var5)();
                    var4 = var8 == var3;
                    var10 = undefined;
                    if(var4) { _fun0002_ip = 79; continue _fun0002 }
 74:
                    var10 = var3.id;
 79:
                    if(!(var8 != var10)) { _fun0002_ip = 599; continue _fun0002 }
 86:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 9;
                    var3 = var6[var3];
                    var6 = var4.bind(var5)(var3);
                    var4 = var6.requestPermission;
                    var3 = _closure1_slot6;
                    var3 = var3.PHOTOS;
                    var6 = var4.bind(var6)(var3);
                    var4 = var6.catch;
                    var3 = function() {
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 6;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = {};
                        var1 = _closure1_slot5;
                        var1 = var1.UNKNOWN_ERROR;
                        var3['errorCode'] = var1;
                        var1 = var4.prototype;
                        var2 = Object.create(var1, {constructor: {value: var4}});
                        var5 = 'Failed requesting photo permissions';
                        var7 = var2;
                        var6 = var3;
                        var1 = new var7[var4](var6, var5, var4);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    };
                    var3 = var4.bind(var6)(var3);
                    SaveGenerator(address=151);
 149:
                    return var3;
 151:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 596; continue _fun0002 }
 160:
                    if(var3) { _fun0002_ip = 231; continue _fun0002 }
 163:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 6;
                    var4 = var7[var4];
                    var9 = var6.bind(var5)(var4);
                    var7 = {};
                    var4 = _closure1_slot5;
                    var4 = var4.UNKNOWN_ERROR;
                    var7['errorCode'] = var4;
                    var4 = var9.prototype;
                    var6 = Object.create(var4, {constructor: {value: var9}});
                    var15 = 'Missing photo permissions';
                    var17 = var6;
                    var16 = var7;
                    var4 = new var17[var9](var16, var15, var14);
                    var4 = var4 instanceof Object ? var4 : var6;
                    throw var4;
 231:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 10;
                    var4 = var7[var4];
                    var7 = var6.bind(var5)(var4);
                    var6 = var7.launchImageLibrary;
                    var4 = {'mediaType': 'photo', 'includeBase64': false, 'presentationStyle': 'pageSheet', 'selectionLimit': 1};
                    var4 = var6.bind(var7)(var4);
                    SaveGenerator(address=280);
 278:
                    return var4;
 280:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0002_ip = 593; continue _fun0002 }
 289:
                    var7 = var4.assets;
                    var6 = 0;
                    var12 = var7[var6];
                    if(!(var8 != var12)) { _fun0002_ip = 525; continue _fun0002 }
 308:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 11;
                    var6 = var9[var6];
                    var9 = var7.bind(var5)(var6);
                    var7 = var9.uploadImageAttachment;
                    var6 = {};
                    var13 = var12.fileName;
                    var6['name'] = var13;
                    var13 = var12.type;
                    var6['type'] = var13;
                    var12 = var12.uri;
                    var6['uri'] = var12;
                    var6 = var7.bind(var9)(var11, var10, var6);
                    SaveGenerator(address=377);
 375:
                    return var6;
 377:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(var7) { _fun0002_ip = 522; continue _fun0002 }
 386:
                    if(!(var8 != var6)) { _fun0002_ip = 441; continue _fun0002 }
 390:
                    var7 = var6.url;
                    if(!(var8 != var7)) { _fun0002_ip = 441; continue _fun0002 }
 399:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var7 = 12;
                    var7 = var9[var7];
                    var7 = var8.bind(var5)(var7);
                    var7 = var6 instanceof var7;
                    if(var7) { _fun0002_ip = 441; continue _fun0002 }
 426:
                    var7 = {};
                    var8 = var6.url;
                    var7['image_url'] = var8;
                    return var7;
 441:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var7 = 6;
                    var7 = var9[var7];
                    var10 = var8.bind(var5)(var7);
                    var9 = {};
                    var7 = _closure1_slot5;
                    var7 = var7.UNKNOWN_ERROR;
                    var9['errorCode'] = var7;
                    var7 = global;
                    var8 = var7.JSON;
                    var7 = var8.stringify;
                    var15 = var7.bind(var8)(var6);
                    var8 = var10.prototype;
                    var8 = Object.create(var8, {constructor: {value: var10}});
                    var17 = var8;
                    var16 = var9;
                    var7 = new var17[var10](var16, var15, var14);
                    var7 = var7 instanceof Object ? var7 : var8;
                    throw var7;
 522:
                    return var6;
 525:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 6;
                    var6 = var8[var6];
                    var9 = var7.bind(var5)(var6);
                    var8 = {};
                    var6 = _closure1_slot5;
                    var6 = var6.UNKNOWN_ERROR;
                    var8['errorCode'] = var6;
                    var6 = var9.prototype;
                    var7 = Object.create(var6, {constructor: {value: var9}});
                    var15 = 'No image selected';
                    var17 = var7;
                    var16 = var8;
                    var6 = new var17[var9](var16, var15, var14);
                    var6 = var6 instanceof Object ? var6 : var7;
                    throw var6;
 593:
                    return var4;
 596:
                    return var3;
 599:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 6;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = {};
                    var2 = _closure1_slot5;
                    var2 = var2.UNKNOWN_ERROR;
                    var4['errorCode'] = var2;
                    var2 = var5.prototype;
                    var3 = Object.create(var2, {constructor: {value: var5}});
                    var15 = 'Unable to find selected channel';
                    var17 = var3;
                    var16 = var4;
                    var2 = new var17[var5](var16, var15, var14);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
 667:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 6;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = {};
                    var2 = _closure1_slot5;
                    var2 = var2.INVALID_COMMAND;
                    var4['errorCode'] = var2;
                    var2 = var5.prototype;
                    var3 = Object.create(var2, {constructor: {value: var5}});
                    var15 = 'No application.';
                    var17 = var3;
                    var16 = var4;
                    var2 = new var17[var5](var16, var15, var14);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
 740:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var4['handler'] = var8;
    var2[var7] = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rpc/native/server/commands/activities.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();