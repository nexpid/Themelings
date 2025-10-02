// app/modules/voice_panel/VoicePanelConstants.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var17 = require;
    var3 = exports;
    var18 = dependencyMap;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var4 = true;
    var5['value'] = var4;
    var2 = '__esModule';
    var2 = var6.bind(var7)(var3, var2, var5);
    var15 = {};
    var2 = 'dismissed';
    var15['DISMISSED'] = var2;
    var2 = 'pip';
    var15['PIP'] = var2;
    var2 = 'panel';
    var15['PANEL'] = var2;
    var _closure1_slot0 = var15;
    var13 = {'mass': 0.5, 'damping': 80, 'stiffness': 200};
    var12 = {};
    var22 = var12;
    var21 = var13;
    var2 = copyDataProperties(var22, var21);
    var2 = 'overshootClamping';
    var12[var2] = var4;
    var11 = {};
    var22 = var11;
    var21 = var13;
    var5 = copyDataProperties(var22, var21);
    var11[var2] = var4;
    var10 = {};
    var22 = var10;
    var21 = var13;
    var2 = copyDataProperties(var22, var21);
    var4 = 0.3;
    var2 = 'mass';
    var10[var2] = var4;
    var9 = {};
    var2 = 'USER';
    var9['USER'] = var2;
    var2 = 'STREAM';
    var9['STREAM'] = var2;
    var2 = 'ACTIVIY';
    var9['ACTIVITY'] = var2;
    var8 = {};
    var2 = 'no_video_participants';
    var8['NO_VIDEO_PARTICIPANTS'] = var2;
    var2 = 'caller_disconnected';
    var8['CALLER_DISCONNECTED'] = var2;
    var7 = {};
    var4 = var8.NO_VIDEO_PARTICIPANTS;
    var16 = 1;
    var2 = {'width': 2, 'height': 1};
    var7[var4] = var2;
    var4 = var1.Set;
    var2 = var1.Object;
    var1 = var2.keys;
    var22 = var1.bind(var2)(var7);
    var2 = var4.prototype;
    var2 = Object.create(var2, {constructor: {value: var4}});
    var23 = var2;
    var1 = new var23[var4](var22, var21);
    var6 = var1 instanceof Object ? var1 : var2;
    var5 = {};
    var1 = 'participant';
    var5['PARTICIPANT'] = var1;
    var1 = 'cta';
    var5['CTA'] = var1;
    var2 = 0;
    var4 = var18[var2];
    var1 = undefined;
    var19 = var17.bind(var1)(var4);
    var4 = var19.isAndroid;
    var4 = var4.bind(var19)();
    var2 = var18[var2];
    var19 = var17.bind(var1)(var2);
    var2 = var19.isIOS;
    var2 = var2.bind(var19)();
    var16 = var18[var16];
    var18 = var17.bind(var1)(var16);
    var17 = var18.fileFinishedImporting;
    var16 = 'modules/voice_panel/VoicePanelConstants.tsx';
    var16 = var17.bind(var18)(var16);
    var3['VoicePanelModes'] = var15;
    var14 = function getAnalyticsNameForVoicePanelMode(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = _closure1_slot0;
            var3 = var3.DISMISSED;
            if(!(var3 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var3 = var3.PIP;
            if(!(var3 !== var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = _closure1_slot0;
            var1 = var1.PANEL;
            if(!(var1 !== var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = undefined;
            return var1;
case 6:
            var1 = 'grid';
            return var1;
case 4:
            var1 = 'pip';
            return var1;
case 2:
            var1 = 'dismissed';
            return var1;
        }
    };
    var3['getAnalyticsNameForVoicePanelMode'] = var14;
    var14 = 3;
    var3['VOICE_PANEL_CHUNK_DIVISOR'] = var14;
    var14 = 24;
    var3['DEFAULT_BORDER_RADIUS'] = var14;
    var3['DEFAULT_BORDER_RADIUS_PIP'] = var14;
    var14 = {'mass': 0.2, 'damping': 10, 'stiffness': 200};
    var3['DRAWER_SPRING_PHYSICS'] = var14;
    var14 = {'mass': 0.3, 'damping': 25, 'stiffness': 150};
    var3['LAYOUT_PHYSICS'] = var14;
    var14 = {'mass': 0.4, 'damping': 60, 'stiffness': 150};
    var3['UI_SHOW_HIDE_PHYSICS'] = var14;
    var3['MODE_CHANGE_PHYSICS'] = var13;
    var3['MODE_CHANGE_PHYSICS_CLAMPED'] = var12;
    var3['BORDER_RADIUS_PHYSICS'] = var11;
    var3['PANEL_CONTROLS_HEIGHT_PHYSICS'] = var10;
    var10 = {'mass': 0.32, 'damping': 10, 'stiffness': 300, 'restDisplacementThreshold': 0.001, 'restSpeedThreshold': 0.001, 'overshootClamping': true};
    var3['SPEAKING_PHYSICS'] = var10;
    var10 = {'damping': 20, 'mass': 0.1, 'stiffness': 100};
    var3['PUSH_TO_TALK_PIP_PHYSICS'] = var10;
    var10 = {'mass': 0.1, 'damping': 20, 'stiffness': 500};
    var3['DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE'] = var10;
    var3['GridItemTypes'] = var9;
    var9 = 165;
    var3['BASE_TARGET_CARD_SIZE'] = var9;
    var3['VoicePanelCTACard'] = var8;
    var3['VoicePanelCTACardDimensions'] = var7;
    var3['VoicePanelCTACardDimensionKeys'] = var6;
    var3['VoicePanelCardItemType'] = var5;
    var3['IS_ANDROID'] = var4;
    var3['IS_IOS'] = var2;
    var2 = 8;
    var3['SECONDARY_PIP_TOP_MARGIN'] = var2;
    var2 = 540;
    var3['VOICE_PANEL_DRAWER_MAX_WIDTH'] = var2;
    return var1;
})();