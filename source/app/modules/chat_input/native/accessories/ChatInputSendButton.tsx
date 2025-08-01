// app/modules/chat_input/native/accessories/ChatInputSendButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function renderChatInputSendButton(arg1, arg2, arg3, arg4) {
        var5 = arg1;
        var4 = _closure1_slot7;
        var3 = _closure1_slot10;
        var2 = {};
        var2['type'] = var5;
        var1 = arg3;
        var2['state'] = var1;
        var1 = arg4;
        var2['cleanup'] = var1;
        var7 = arg2;
        var8 = var2;
        var1 = copyDataProperties(var8, var7);
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2, var5);
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = function getChatInputSendButtonItemKey(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.isOnCooldown;
            var4 = var1.sendVoiceMessageEnabled;
            var1 = var1.sendEnabled;
            var3 = _closure1_slot8;
            if(var4) { _fun0001_ip = 50; continue _fun0001 }
 31:
            if(var1) { _fun0001_ip = 42; continue _fun0001 }
 34:
            var1 = var3.BUTTON_SEND_DISABLED;
            _fun0001_ip = 48; continue _fun0001;
 42:
            var1 = var3.BUTTON_SEND;
 48:
            _fun0001_ip = 70; continue _fun0001;
 50:
            if(var2) { _fun0001_ip = 61; continue _fun0001 }
 53:
            var2 = var3.BUTTON_SEND_VOICE_MESSAGE;
            _fun0001_ip = 67; continue _fun0001;
 61:
            var2 = var3.BUTTON_SEND_VOICE_MESSAGE_DISABLED;
 67:
            var1 = var2;
 70:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
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
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var11 = var4.CHAT_INPUT_ACTION_BUTTON_SIZE;
    var13 = var4.CHAT_INPUT_ACTION_BUTTON_WIDTH;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = {};
    var8 = 'send-button';
    var4['BUTTON_SEND'] = var8;
    var8 = 'send-button-disabled';
    var4['BUTTON_SEND_DISABLED'] = var8;
    var8 = 'voice-message-button';
    var4['BUTTON_SEND_VOICE_MESSAGE'] = var8;
    var8 = 'voice-message-button-disabled';
    var4['BUTTON_SEND_VOICE_MESSAGE_DISABLED'] = var8;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10['width'] = var13;
    var10['height'] = var11;
    var4['container'] = var10;
    var10 = {};
    var11 = 7;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BG_BRAND;
    var10['backgroundColor'] = var13;
    var4['sendButtonActive'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.WHITE;
    var10['tintColor'] = var11;
    var4['sendButtonIconActive'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot9 = var4;
    var8 = var7.memo;
    var4 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var12 = var1.onSendMessage;
            var11 = var1.sendEnabled;
            var10 = var1.isOnCooldown;
            var9 = var1.channelId;
            var5 = var1.state;
            var8 = var1.cleanup;
            var7 = var1.type;
            var1 = _closure1_slot9;
            var4 = undefined;
            var13 = var1.bind(var4)();
            var3 = _closure1_slot7;
            var2 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 8;
            var1 = var14[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['cleanup'] = var8;
            var1['state'] = var5;
            var5 = _closure1_slot8;
            var5 = var5.BUTTON_SEND_VOICE_MESSAGE;
            if(!(var7 !== var5)) { _fun0002_ip = 276; continue _fun0002 }
 107:
            var5 = _closure1_slot8;
            var5 = var5.BUTTON_SEND_VOICE_MESSAGE_DISABLED;
            if(!(var7 !== var5)) { _fun0002_ip = 276; continue _fun0002 }
 124:
            var8 = _closure1_slot7;
            var7 = _closure1_slot1;
            var17 = _closure1_slot2;
            var5 = 10;
            var5 = var17[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var14 = true;
            var5['active'] = var14;
            var14 = var13.sendButtonActive;
            var5['activeStyle'] = var14;
            var13 = var13.sendButtonIconActive;
            var5['activeIconStyle'] = var13;
            var16 = _closure1_slot0;
            var13 = 11;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.SendMessageIcon;
            var5['IconComponent'] = var13;
            var13 = 12;
            var14 = var17[var13];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.TXNS7e;
            var13 = var14.bind(var15)(var13);
            var5['accessibilityLabel'] = var13;
            var5['onPress'] = var12;
            var11 = !var11;
            var5['disabled'] = var11;
            var5 = var8.bind(var4)(var7, var5);
            _fun0002_ip = 316; continue _fun0002;
 276:
            var8 = _closure1_slot7;
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var6 = 9;
            var6 = var11[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['disabled'] = var10;
            var6['channelId'] = var9;
            var5 = var8.bind(var4)(var7, var6);
 316:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot10 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var3 = var4.channel;
            var _closure2_slot0 = var3;
            var6 = var4.defaultValue;
            var2 = var4.canSendVoiceMessage;
            var12 = var4.hasPendingAttachments;
            var13 = var4.hasPendingEdit;
            var10 = var4.onSendMessage;
            var _closure2_slot1 = var10;
            var7 = var4.requireTextContent;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0003_ip = 62; continue _fun0003 }
 60:
            var7 = false;
 62:
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var5 = _closure1_slot9;
            var5 = var5.bind(var4)();
            var14 = _closure1_slot4;
            var11 = var14.useState;
            var9 = var6.length;
            var6 = 0;
            var9 = var9 > var6;
            var14 = var11.bind(var14)(var9);
            var11 = _closure1_slot3;
            var9 = 2;
            var11 = var11.bind(var4)(var14, var9);
            var6 = var11[var6];
            var9 = 1;
            var9 = var11[var9];
            _closure2_slot2 = var9;
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = 13;
            var9 = var14[var9];
            var16 = var11.bind(var4)(var9);
            var15 = var16.useStateFromStores;
            var9 = _closure1_slot6;
            var14 = new Array(1);
            var14[0] = var9;
            var11 = new Array(1);
            var11[0] = var3;
            var9 = function() {
                var3 = _closure1_slot6;
                var2 = var3.isChannelOnCooldown;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var11 = var15.bind(var16)(var14, var9, var11);
            _closure2_slot3 = var11;
            var9 = !var11;
            if(var9) { _fun0003_ip = 214; continue _fun0003 }
 211:
            var9 = var13;
 214:
            if(!var9) { _fun0003_ip = 232; continue _fun0003 }
 217:
            if(var6) { _fun0003_ip = 223; continue _fun0003 }
 220:
            var6 = var12;
 223:
            if(var6) { _fun0003_ip = 229; continue _fun0003 }
 226:
            var6 = !var7;
 229:
            var9 = var6;
 232:
            _closure2_slot4 = var9;
            if(!var2) { _fun0003_ip = 242; continue _fun0003 }
 239:
            var2 = !var9;
 242:
            _closure2_slot5 = var2;
            var6 = _closure1_slot4;
            var7 = var6.useMemo;
            var12 = var3.id;
            var3 = new Array(5);
            var3[0] = var12;
            var3[1] = var11;
            var3[2] = var10;
            var3[3] = var9;
            var3[4] = var2;
            var2 = function() {
                var2 = {};
                var3 = _closure2_slot0;
                var3 = var3.id;
                var2['channelId'] = var3;
                var3 = _closure2_slot3;
                var2['isOnCooldown'] = var3;
                var3 = _closure2_slot1;
                var2['onSendMessage'] = var3;
                var3 = _closure2_slot4;
                var2['sendEnabled'] = var3;
                var1 = _closure2_slot5;
                var2['sendVoiceMessageEnabled'] = var1;
                var1 = new Array(1);
                var1[0] = var2;
                return var1;
            };
            var9 = var7.bind(var6)(var2, var3);
            var3 = var6.useImperativeHandle;
            var2 = arg2;
            var1 = function() {
                var1 = {};
                var2 = _closure2_slot2;
                var1['setHasText'] = var2;
                return var1;
            };
            var1 = var3.bind(var6)(var2, var1);
            var3 = _closure1_slot7;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var5.container;
            var1['style'] = var5;
            var7 = _closure1_slot7;
            var6 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 14;
            var5 = var10[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.TransitionGroup;
            var5 = {};
            var5['items'] = var9;
            var9 = _closure1_slot11;
            var5['renderItem'] = var9;
            var8 = _closure1_slot12;
            var5['getItemKey'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var4.bind(var7)(var2);
    var2 = 'ChatInputSendButton';
    var4['displayName'] = var2;
    var2 = var7.memo;
    var2 = var2.bind(var7)(var4);
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/accessories/ChatInputSendButton.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();