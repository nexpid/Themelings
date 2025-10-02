// app/modules/messages/markUnread.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _markUnread() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var11 = arg1;
                    var4 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var _closure4_slot0 = var4;
                    var3 = undefined;
                    var _closure4_slot1 = var3;
                    var _closure4_slot2 = var3;
                    var _closure4_slot3 = var3;
                    var5 = _closure1_slot8;
                    var2 = var5.getCurrentUser;
                    var5 = var2.bind(var5)();
                    _closure4_slot1 = var5;
                    var2 = null;
                    if(!(var2 != var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var6 = _closure1_slot6;
                    var5 = var6.getMessages;
                    var8 = var5.bind(var6)(var11);
                    var5 = var8.toArray;
                    var10 = var5.bind(var8)();
                    var6 = var10.filter;
                    var5 = function(arg1) {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 8;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.compare;
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure4_slot0;
                        var2 = var3.bind(var4)(var2, var1);
                        var1 = 0;
                        var1 = var2 < var1;
                        return var1;
                    };
                    var10 = var6.bind(var10)(var5);
                    var6 = var10.sort;
                    var5 = function(arg1, arg2) {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 8;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.compare;
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = arg2;
                        var1 = var1.id;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var6 = var6.bind(var10)(var5);
                    var5 = var6.reverse;
                    var6 = var5.bind(var6)();
                    var5 = 0;
                    var6 = var6[var5];
                    if(!(var2 != var6)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var10 = var6.id;
                    _fun0001_ip = 8; continue _fun0001;
case 6:
                    var12 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var6 = 8;
                    var6 = var13[var6];
                    var12 = var12.bind(var3)(var6);
                    var6 = var12.atPreviousMillisecond;
                    var10 = var6.bind(var12)(var4);
case 8:
                    _closure4_slot2 = var10;
                    _closure4_slot3 = var5;
                    var6 = var8.forAll;
                    var5 = function(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            var6 = arg1;
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 8;
                            var2 = var2[var1];
                            var1 = undefined;
                            var8 = var3.bind(var1)(var2);
                            var7 = var8.compare;
                            var5 = var6.id;
                            var2 = _closure4_slot2;
                            var5 = var7.bind(var8)(var5, var2);
                            var2 = 0;
                            var2 = var5 > var2;
                            if(!var2) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                            var5 = _closure1_slot7;
                            var4 = _closure4_slot1;
                            var2 = var5.bind(var1)(var6, var4);
case 9:
                            if(!var2) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                            var2 = _closure4_slot3;
                            var2 = var2 + 1;
                            _closure4_slot3 = var2;
case 11:
                            return var1;
                        }
                    };
                    var5 = var6.bind(var8)(var5);
                    var6 = _closure1_slot5;
                    var5 = var6.getChannel;
                    var12 = var5.bind(var6)(var11);
                    var2 = var2 != var12;
                    if(!var2) { _fun0001_ip = 13; continue _fun0001 }
case 14:
                    var5 = var12.isThread;
                    var2 = var5.bind(var12)();
case 13:
                    if(!var2) { _fun0001_ip = 15; continue _fun0001 }
case 16:
                    var2 = var12.isArchivedThread;
                    var2 = var2.bind(var12)();
                    if(!var2) { _fun0001_ip = 17; continue _fun0001 }
case 18:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 9;
                    var2 = var6[var2];
                    var6 = var5.bind(var3)(var2);
                    var5 = var6.unarchiveThread;
                    var2 = false;
                    var2 = var5.bind(var6)(var12, var2);
                    SaveGenerator(address=297);
case 19:
                    return var2;
case 20:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 21; continue _fun0001 }
case 17:
                    var6 = _closure1_slot4;
                    var5 = var6.hasJoined;
                    var5 = var5.bind(var6)(var11);
                    if(var5) { _fun0001_ip = 15; continue _fun0001 }
case 22:
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 9;
                    var5 = var8[var5];
                    var8 = var6.bind(var3)(var5);
                    var6 = var8.joinThread;
                    var5 = 'Mark Unread';
                    var5 = var6.bind(var8)(var12, var5);
                    SaveGenerator(address=366);
case 23:
                    return var5;
case 24:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(!var6) { _fun0001_ip = 15; continue _fun0001 }
case 25:
                    return var5;
case 15:
                    var8 = _closure1_slot10;
                    var6 = var8.log;
                    var5 = {};
                    var5['channelId'] = var11;
                    var5['messageId'] = var4;
                    var4 = 'Marking unread';
                    var4 = var6.bind(var8)(var4, var5);
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 10;
                    var4 = var6[var4];
                    var4 = var5.bind(var3)(var4);
                    var6 = var4.HTTP;
                    var5 = var6.post;
                    var4 = {};
                    var8 = _closure1_slot9;
                    var7 = var8.MESSAGE_ACK;
                    var7 = var7.bind(var8)(var11, var10);
                    var4['url'] = var7;
                    var8 = {};
                    var7 = true;
                    var8['manual'] = var7;
                    var9 = _closure4_slot3;
                    var8['mention_count'] = var9;
                    var4['body'] = var8;
                    var4['oldFormErrors'] = var7;
                    var4['rejectWithError'] = var7;
                    var4 = var5.bind(var6)(var4);
case 4:
                    return var3;
case 21:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot11 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
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
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.shouldBadgeMessage;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'markUnread';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot10 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/markUnread.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function markUnread() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();