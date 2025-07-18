// app/modules/messages/native/renderer/MessageConnected.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var9 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var6;
    var1 = function ThreadStarterMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var11 = var2.row;
            var _closure2_slot0 = var11;
            var9 = var2.starterMessage;
            var _closure2_slot1 = var9;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var3 = var11.message;
            var _closure2_slot2 = var3;
            var14 = var11.isFirst;
            var13 = var11.isEditing;
            var2 = var11.isSystemDM;
            var8 = var4 !== var2;
            if(!var8) { _fun0001_ip = 68; continue _fun0001 }
 65:
            var8 = var2;
 68:
            var2 = var11.canShowImages;
            var12 = var4 === var2;
            if(var12) { _fun0001_ip = 84; continue _fun0001 }
 81:
            var12 = var2;
 84:
            var6 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 5;
            var2 = var10[var2];
            var7 = var6.bind(var4)(var2);
            var2 = {};
            var2['message'] = var9;
            var2['isFirst'] = var14;
            var2['isEditing'] = var13;
            var2['canShowImages'] = var12;
            var2['isSystemDM'] = var8;
            var8 = false;
            var2['canShowReactions'] = var8;
            var2 = var7.bind(var4)(var2);
            _closure2_slot3 = var2;
            var8 = _closure1_slot3;
            var7 = var8.useMemo;
            var12 = var3.id;
            var3 = new Array(2);
            var3[0] = var12;
            var3[1] = var2;
            var2 = function() {
                var1 = {};
                var9 = _closure2_slot3;
                var10 = var1;
                var3 = copyDataProperties(var10, var9);
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 6;
                var4 = var8[var3];
                var6 = undefined;
                var4 = var7.bind(var6)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var8[var3];
                var3 = var7.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.uBid4u;
                var4 = var4.bind(var5)(var3);
                var3 = 'threadStarterMessageHeader';
                var1[var3] = var4;
                var2 = _closure2_slot2;
                var3 = var2.id;
                var2 = 'id';
                var1[var2] = var3;
                return var1;
            };
            var8 = var7.bind(var8)(var2, var3);
            var7 = _closure1_slot3;
            var3 = var7.useMemo;
            var2 = new Array(2);
            var2[0] = var11;
            var2[1] = var9;
            var1 = function() {
                var1 = {};
                var4 = _closure2_slot0;
                var5 = var1;
                var3 = copyDataProperties(var5, var4);
                var3 = _closure2_slot1;
                var2 = 'message';
                var1[var2] = var3;
                return var1;
            };
            var9 = var3.bind(var7)(var1, var2);
            var3 = _closure1_slot6;
            var2 = _closure1_slot0;
            var1 = 7;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.RenderMessageOptionsOverride;
            var1 = {'renderThreadEmbeds': false, 'renderReactions': false};
            var7 = _closure1_slot6;
            var5 = 8;
            var5 = var10[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['row'] = var9;
            var5['messageContent'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = function UserMessage(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var6 = var1.row;
            var8 = var1.isMentioningReply;
            var14 = var6.message;
            var13 = var6.isFirst;
            var12 = var6.isEditing;
            var1 = var6.isSystemDM;
            var4 = undefined;
            var10 = var4 !== var1;
            if(!var10) { _fun0002_ip = 50; continue _fun0002 }
 47:
            var10 = var1;
 50:
            var1 = var6.canShowImages;
            var11 = var4 === var1;
            if(var11) { _fun0002_ip = 66; continue _fun0002 }
 63:
            var11 = var1;
 66:
            var9 = var6.renderContentOnly;
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 5;
            var3 = var7[var3];
            var5 = var2.bind(var4)(var3);
            var3 = {};
            var3['message'] = var14;
            var3['isFirst'] = var13;
            var3['isEditing'] = var12;
            var3['canShowImages'] = var11;
            var3['isSystemDM'] = var10;
            var3['renderContentOnly'] = var9;
            var3['isMentioningReply'] = var8;
            var5 = var5.bind(var4)(var3);
            var3 = _closure1_slot6;
            var1 = 8;
            var1 = var7[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['row'] = var6;
            var1['messageContent'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var8 = var4.bind(var1)(var7);
    var _closure1_slot3 = var8;
    var4 = 1;
    var7 = var6[var4];
    var7 = var9.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ReferencedMessageState;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var7 = var8.memo;
    var4 = function MessageConnected(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var7 = var1.row;
            var8 = var1.isMentioningReply;
            var3 = var7.message;
            var1 = function useReferencedThreadStarterMessage(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = arg1;
                    var7 = var4.type;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 3;
                    var3 = var5[var3];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var3 = var3.MessageTypes;
                    var6 = var3.THREAD_STARTER_MESSAGE;
                    var3 = undefined;
                    if(!(var7 === var6)) { _fun0004_ip = 59; continue _fun0004 }
 53:
                    var3 = var4.messageReference;
 59:
                    var _closure3_slot0 = var3;
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 4;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.useStateFromStores;
                    var6 = _closure1_slot4;
                    var3 = new Array(1);
                    var3[0] = var6;
                    var2 = function() {
                        var3 = _closure1_slot4;
                        var2 = var3.getMessageByReference;
                        var1 = _closure3_slot0;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var2 = var4.bind(var5)(var3, var2);
                    var4 = var2.state;
                    var1 = _closure1_slot5;
                    var3 = var1.LOADED;
                    var1 = null;
                    if(!(var4 === var3)) { _fun0004_ip = 137; continue _fun0004 }
 132:
                    var1 = var2.message;
 137:
                    return var1;
                }
            };
            var5 = undefined;
            var6 = var1.bind(var5)(var3);
            var1 = null;
            if(!(var1 == var6)) { _fun0003_ip = 134; continue _fun0003 }
 40:
            var4 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 9;
            var1 = var9[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.bind(var5)(var3);
            var4 = _closure1_slot6;
            if(var1) { _fun0003_ip = 99; continue _fun0003 }
 75:
            var3 = _closure1_slot8;
            var1 = {};
            var1['row'] = var7;
            var1['isMentioningReply'] = var8;
            var1 = var4.bind(var5)(var3, var1);
            _fun0003_ip = 132; continue _fun0003;
 99:
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 10;
            var2 = var8[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['row'] = var7;
            var1 = var4.bind(var5)(var3, var2);
 132:
            _fun0003_ip = 163; continue _fun0003;
 134:
            var4 = _closure1_slot6;
            var3 = _closure1_slot7;
            var2 = {};
            var2['row'] = var7;
            var2['starterMessage'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 163:
            return var1;
        }
    };
    var2 = function(arg1, arg2) {
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 11;
        var1 = var3[var1];
        var4 = undefined;
        var3 = var2.bind(var4)(var1);
        var1 = arg1;
        var2 = var1.row;
        var1 = arg2;
        var1 = var1.row;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2 = var7.bind(var8)(var4, var2);
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/MessageConnected.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();