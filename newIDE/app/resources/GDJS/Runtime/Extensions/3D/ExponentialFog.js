var gdjs;(function(r){r.PixiFiltersTools.registerFilterCreator("Scene3D::ExponentialFog",new class{makeFilter(n,o){return new class{constructor(){this.fog=new THREE.FogExp2(16777215)}isEnabled(t){const e=t.get3DRendererObject();return e?e.fog===this.fog:!1}setEnabled(t,e){return e?this.applyEffect(t):this.removeEffect(t)}applyEffect(t){const e=t.get3DRendererObject();return!e||e.fog===void 0?!1:(e.fog=this.fog,!0)}removeEffect(t){const e=t.get3DRendererObject();return!e||e.fog===void 0?!1:(e.fog=null,!0)}updatePreRender(t){}updateDoubleParameter(t,e){t==="density"&&(this.fog.density=e)}updateStringParameter(t,e){t==="color"&&(this.fog.color=new THREE.Color(r.PixiFiltersTools.rgbOrHexToHexNumber(e)))}updateBooleanParameter(t,e){}}}})})(gdjs||(gdjs={}));
//# sourceMappingURL=ExponentialFog.js.map
