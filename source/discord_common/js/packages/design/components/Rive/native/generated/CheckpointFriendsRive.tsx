// discord_common/js/packages/design/components/Rive/native/generated/CheckpointFriendsRive.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = ['artboard', 'stateMachine', 'defaultViewModelInstance'];
    var _closure1_slot3 = var1;
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
    var _closure1_slot4 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = {};
    var8 = {'reducedMotion': 'boolean', 'twoFriends': 'boolean', 'AnimationState': 'number', 'Avatar01/ShadowVisibility': 'number', 'Avatar01/StrokeVisibility': 'number', 'Avatar01/UsernameVisibility': 'number', 'Avatar01/Stroke': 'color', 'Avatar01/Fill': 'color', 'Avatar01/Username': 'string', 'Avatar01/img': 'image', 'Avatar02/ShadowVisibility': 'number', 'Avatar02/StrokeVisibility': 'number', 'Avatar02/UsernameVisibility': 'number', 'Avatar02/Stroke': 'color', 'Avatar02/Fill': 'color', 'Avatar02/Username': 'string', 'Avatar02/img': 'image', 'Avatar03/ShadowVisibility': 'number', 'Avatar03/StrokeVisibility': 'number', 'Avatar03/UsernameVisibility': 'number', 'Avatar03/Stroke': 'color', 'Avatar03/Fill': 'color', 'Avatar03/Username': 'string', 'Avatar03/img': 'image', 'Avatar04/ShadowVisibility': 'number', 'Avatar04/StrokeVisibility': 'number', 'Avatar04/UsernameVisibility': 'number', 'Avatar04/Stroke': 'color', 'Avatar04/Fill': 'color', 'Avatar04/Username': 'string', 'Avatar04/img': 'image', 'Avatar05/ShadowVisibility': 'number', 'Avatar05/StrokeVisibility': 'number', 'Avatar05/UsernameVisibility': 'number', 'Avatar05/Stroke': 'color', 'Avatar05/Fill': 'color', 'Avatar05/Username': 'string', 'Avatar05/img': 'image', 'ConnectorColor': 'color'};
    var4['MAIN'] = var8;
    var8 = {'reducedMotion': 'boolean', 'twoFriends': 'boolean', 'AnimationState': 'number', 'Avatar01/ShadowVisibility': 'number', 'Avatar01/StrokeVisibility': 'number', 'Avatar01/UsernameVisibility': 'number', 'Avatar01/Stroke': 'color', 'Avatar01/Fill': 'color', 'Avatar01/Username': 'string', 'Avatar01/img': 'image', 'Avatar02/ShadowVisibility': 'number', 'Avatar02/StrokeVisibility': 'number', 'Avatar02/UsernameVisibility': 'number', 'Avatar02/Stroke': 'color', 'Avatar02/Fill': 'color', 'Avatar02/Username': 'string', 'Avatar02/img': 'image', 'Avatar03/ShadowVisibility': 'number', 'Avatar03/StrokeVisibility': 'number', 'Avatar03/UsernameVisibility': 'number', 'Avatar03/Stroke': 'color', 'Avatar03/Fill': 'color', 'Avatar03/Username': 'string', 'Avatar03/img': 'image', 'Avatar04/ShadowVisibility': 'number', 'Avatar04/StrokeVisibility': 'number', 'Avatar04/UsernameVisibility': 'number', 'Avatar04/Stroke': 'color', 'Avatar04/Fill': 'color', 'Avatar04/Username': 'string', 'Avatar04/img': 'image', 'Avatar05/ShadowVisibility': 'number', 'Avatar05/StrokeVisibility': 'number', 'Avatar05/UsernameVisibility': 'number', 'Avatar05/Stroke': 'color', 'Avatar05/Fill': 'color', 'Avatar05/Username': 'string', 'Avatar05/img': 'image', 'ConnectorColor': 'color'};
    var4['Sidekick'] = var8;
    var8 = {'ShadowVisibility': 'number', 'StrokeVisibility': 'number', 'UsernameVisibility': 'number', 'Stroke': 'color', 'Fill': 'color', 'Username': 'string', 'img': 'image'};
    var4['Avatar'] = var8;
    var8 = {'ShadowVisibility': 'number', 'StrokeVisibility': 'number', 'UsernameVisibility': 'number', 'Stroke': 'color', 'Fill': 'color', 'Username': 'string', 'img': 'image'};
    var4['Username'] = var8;
    var8 = {'reducedMotion': 'boolean', 'twoFriends': 'boolean', 'AnimationState': 'number', 'Avatar01/ShadowVisibility': 'number', 'Avatar01/StrokeVisibility': 'number', 'Avatar01/UsernameVisibility': 'number', 'Avatar01/Stroke': 'color', 'Avatar01/Fill': 'color', 'Avatar01/Username': 'string', 'Avatar01/img': 'image', 'Avatar02/ShadowVisibility': 'number', 'Avatar02/StrokeVisibility': 'number', 'Avatar02/UsernameVisibility': 'number', 'Avatar02/Stroke': 'color', 'Avatar02/Fill': 'color', 'Avatar02/Username': 'string', 'Avatar02/img': 'image', 'Avatar03/ShadowVisibility': 'number', 'Avatar03/StrokeVisibility': 'number', 'Avatar03/UsernameVisibility': 'number', 'Avatar03/Stroke': 'color', 'Avatar03/Fill': 'color', 'Avatar03/Username': 'string', 'Avatar03/img': 'image', 'Avatar04/ShadowVisibility': 'number', 'Avatar04/StrokeVisibility': 'number', 'Avatar04/UsernameVisibility': 'number', 'Avatar04/Stroke': 'color', 'Avatar04/Fill': 'color', 'Avatar04/Username': 'string', 'Avatar04/img': 'image', 'Avatar05/ShadowVisibility': 'number', 'Avatar05/StrokeVisibility': 'number', 'Avatar05/UsernameVisibility': 'number', 'Avatar05/Stroke': 'color', 'Avatar05/Fill': 'color', 'Avatar05/Username': 'string', 'Avatar05/img': 'image', 'ConnectorColor': 'color'};
    var4['Friends 01 Rotation'] = var8;
    var _closure1_slot6 = var4;
    var4 = {};
    var8 = ['threeFriends', 'twoFriends-reducedMotion', 'threeFriends-reducedMotion', 'twoFriends'];
    var4['MAIN'] = var8;
    var8 = ['threeFriends', 'twoFriends-reducedMotion', 'threeFriends-reducedMotion', 'twoFriends'];
    var4['Sidekick'] = var8;
    var8 = ['Instance 03', 'Instance 05', 'Instance 04', 'Instance 02', 'Instance 01'];
    var4['Avatar'] = var8;
    var8 = ['Instance 03', 'Instance 05', 'Instance 04', 'Instance 02', 'Instance 01'];
    var4['Username'] = var8;
    var8 = ['threeFriends', 'twoFriends-reducedMotion', 'threeFriends-reducedMotion', 'twoFriends'];
    var4['Friends 01 Rotation'] = var8;
    var _closure1_slot7 = var4;
    var4 = var7.forwardRef;
    var2 = function CheckpointFriendsRiveInner(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = var3.artboard;
            var9 = 'MAIN';
            var4 = undefined;
            if(!(var4 !== var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var9 = var1;
case 2:
            var6 = var3.stateMachine;
            var1 = var3.defaultViewModelInstance;
            var7 = 'threeFriends';
            if(!(var4 !== var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var1;
case 4:
            var2 = _closure1_slot4;
            var1 = _closure1_slot3;
            var13 = var2.bind(var4)(var3, var1);
            var3 = _closure1_slot5;
            var2 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 3;
            var1 = var12[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.BaseRive;
            var1 = {};
            var10 = arg2;
            var1['ref'] = var10;
            var11 = _closure1_slot1;
            var10 = 4;
            var10 = var12[var10];
            var10 = var11.bind(var4)(var10);
            var1['src'] = var10;
            var10 = 'checkpoint_friends';
            var1['resourceName'] = var10;
            var1['artboard'] = var9;
            var9 = _closure1_slot6;
            var1['artboardProperties'] = var9;
            var8 = _closure1_slot7;
            var1['artboardViewModelInstances'] = var8;
            var1['defaultViewModelInstance'] = var7;
            var1['stateMachine'] = var6;
            var14 = var1;
            var5 = copyDataProperties(var14, var13);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/design/components/Rive/native/generated/CheckpointFriendsRive.tsx';
    var4 = var5.bind(var6)(var4);
    var3['CheckpointFriendsRive'] = var2;
    return var1;
})();