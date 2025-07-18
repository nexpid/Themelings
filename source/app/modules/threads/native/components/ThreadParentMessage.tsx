// app/modules/threads/native/components/ThreadParentMessage.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var4 = 1;
    var8 = var6[var4];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ReferencedMessageState;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var7 = var4.prototype;
    var7 = Object.create(var7, {constructor: {value: var4}});
    var13 = var7;
    var4 = new var13[var4](var12);
    var8 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot7 = var8;
    var7 = var8.setOptions;
    var4 = {'renderCodedLinks': false, 'renderGiftCode': false, 'renderActivityInstanceEmbed': false, 'renderActivityInviteEmbed': false, 'renderEmbeds': true, 'ignoreMentioned': true, 'inlineAttachmentMedia': true, 'inlineEmbedMedia': true, 'renderReactions': false, 'renderShortcuts': false, 'renderReplies': true, 'renderThreadEmbeds': false};
    var4 = var7.bind(var8)(var4);
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/threads/native/components/ThreadParentMessage.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function ThreadChannelStarterMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.guildId;
            var _closure2_slot0 = var2;
            var2 = var1.messageId;
            var _closure2_slot1 = var2;
            var1 = var1.channelId;
            var _closure2_slot2 = var1;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 5;
            var1 = var3[var1];
            var5 = undefined;
            var4 = var2.bind(var5)(var1);
            var3 = var4.useStateFromStores;
            var1 = _closure1_slot3;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var4 = _closure1_slot3;
                var3 = var4.getMessage;
                var2 = _closure2_slot2;
                var1 = _closure2_slot1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var8 = var3.bind(var4)(var2, var1);
            var1 = null;
            var2 = var1 == var8;
            var3 = undefined;
            if(var2) { _fun0001_ip = 103; continue _fun0001 }
 98:
            var3 = var8.state;
 103:
            var2 = _closure1_slot4;
            var2 = var2.LOADED;
            var1 = null;
            if(!(var3 === var2)) { _fun0001_ip = 229; continue _fun0001 }
 119:
            var4 = _closure1_slot6;
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 6;
            var2 = var10[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.PressableOpacity;
            var2 = {};
            var7 = 'button';
            var2['accessibilityRole'] = var7;
            var6 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.transitionToGuild;
                var4 = _closure2_slot0;
                var3 = _closure2_slot2;
                var2 = _closure2_slot1;
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            var2['onPress'] = var6;
            var7 = _closure1_slot1;
            var6 = 8;
            var6 = var10[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var9 = _closure1_slot7;
            var6['rowGenerator'] = var9;
            var8 = var8.message;
            var6['message'] = var8;
            var8 = true;
            var6['useDarkGradient'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 229:
            return var1;
        }
    };
    var3['ThreadChannelStarterMessage'] = var4;
    var2 = function ThreadCreationStarterMessage(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var3 = var2.messageId;
            var _closure2_slot0 = var3;
            var2 = var2.channelId;
            var _closure2_slot1 = var2;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 5;
            var2 = var4[var2];
            var5 = undefined;
            var4 = var3.bind(var5)(var2);
            var3 = var4.useStateFromStores;
            var6 = _closure1_slot5;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = function() {
                var4 = _closure1_slot5;
                var3 = var4.getMessage;
                var2 = _closure2_slot1;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var6 = var3.bind(var4)(var2, var1);
            var1 = null;
            var2 = var1 == var6;
            if(var2) { _fun0002_ip = 132; continue _fun0002 }
 87:
            var4 = _closure1_slot6;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 8;
            var2 = var8[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var7 = _closure1_slot7;
            var2['rowGenerator'] = var7;
            var2['message'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 132:
            return var1;
        }
    };
    var3['ThreadCreationStarterMessage'] = var2;
    return var1;
})();