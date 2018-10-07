// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"../node_modules/element-size/index.js":[function(require,module,exports) {
module.exports = getSize

function getSize(element) {
  // Handle cases where the element is not already
  // attached to the DOM by briefly appending it
  // to document.body, and removing it again later.
  if (element === window || element === document.body) {
    return [window.innerWidth, window.innerHeight]
  }

  if (!element.parentNode) {
    var temporary = true
    document.body.appendChild(element)
  }

  var bounds = element.getBoundingClientRect()
  var styles = getComputedStyle(element)
  var height = (bounds.height|0)
    + parse(styles.getPropertyValue('margin-top'))
    + parse(styles.getPropertyValue('margin-bottom'))
  var width  = (bounds.width|0)
    + parse(styles.getPropertyValue('margin-left'))
    + parse(styles.getPropertyValue('margin-right'))

  if (temporary) {
    document.body.removeChild(element)
  }

  return [width, height]
}

function parse(prop) {
  return parseFloat(prop) || 0
}

},{}],"../node_modules/canvas-fit-margin-ts/dist/index.js":[function(require,module,exports) {
"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};exports.__esModule=!0;var getSize=require("element-size"),defaultOptions={parent:null,margin:0,scale:1};function createFit(r,e){var t=__assign({},defaultOptions,e),s=t.margin,a=t.scale,o=t.parent;function i(){var e,t,i=o||r.parentNode;if(i&&i!==document.body){var n=getSize(i);e=0|n[0],t=0|n[1]}else e=window.innerWidth,t=window.innerHeight;return e-=2*s,t-=2*s,r.width=e*a,r.height=t*a,r.style.width=e+"px",r.style.height=t+"px",[e,t]}return r.style.position=r.style.position||"relative",r.style.top="0",r.style.left="0",r.style.margin=s+"px",i(),i}exports.createFit=createFit;
},{"element-size":"../node_modules/element-size/index.js"}],"Flock.ts":[function(require,module,exports) {
"use strict";

exports.__esModule = true;

var Flock =
/** @class */
function () {
  function Flock() {
    this.boids = []; // Initialize the array
  }

  Flock.prototype.run = function () {
    for (var _i = 0, _a = this.boids; _i < _a.length; _i++) {
      var boid = _a[_i];
      boid.run(this.boids); // Passing the entire list of boids to each boid individually
    }
  };

  Flock.prototype.addBoid = function (b) {
    this.boids.push(b);
  };

  return Flock;
}();

exports.Flock = Flock;
},{}],"../node_modules/gl-vec2/epsilon.js":[function(require,module,exports) {
module.exports = 0.000001

},{}],"../node_modules/gl-vec2/create.js":[function(require,module,exports) {
module.exports = create

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */
function create() {
    var out = new Float32Array(2)
    out[0] = 0
    out[1] = 0
    return out
}
},{}],"../node_modules/gl-vec2/clone.js":[function(require,module,exports) {
module.exports = clone

/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {vec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */
function clone(a) {
    var out = new Float32Array(2)
    out[0] = a[0]
    out[1] = a[1]
    return out
}
},{}],"../node_modules/gl-vec2/fromValues.js":[function(require,module,exports) {
module.exports = fromValues

/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */
function fromValues(x, y) {
    var out = new Float32Array(2)
    out[0] = x
    out[1] = y
    return out
}
},{}],"../node_modules/gl-vec2/copy.js":[function(require,module,exports) {
module.exports = copy

/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */
function copy(out, a) {
    out[0] = a[0]
    out[1] = a[1]
    return out
}
},{}],"../node_modules/gl-vec2/set.js":[function(require,module,exports) {
module.exports = set

/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */
function set(out, x, y) {
    out[0] = x
    out[1] = y
    return out
}
},{}],"../node_modules/gl-vec2/equals.js":[function(require,module,exports) {
module.exports = equals

var EPSILON = require('./epsilon')

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
  var a0 = a[0]
  var a1 = a[1]
  var b0 = b[0]
  var b1 = b[1]
  return (Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)))
}

},{"./epsilon":"../node_modules/gl-vec2/epsilon.js"}],"../node_modules/gl-vec2/exactEquals.js":[function(require,module,exports) {
module.exports = exactEquals

/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1]
}

},{}],"../node_modules/gl-vec2/add.js":[function(require,module,exports) {
module.exports = add

/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function add(out, a, b) {
    out[0] = a[0] + b[0]
    out[1] = a[1] + b[1]
    return out
}
},{}],"../node_modules/gl-vec2/subtract.js":[function(require,module,exports) {
module.exports = subtract

/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function subtract(out, a, b) {
    out[0] = a[0] - b[0]
    out[1] = a[1] - b[1]
    return out
}
},{}],"../node_modules/gl-vec2/sub.js":[function(require,module,exports) {
module.exports = require('./subtract')

},{"./subtract":"../node_modules/gl-vec2/subtract.js"}],"../node_modules/gl-vec2/multiply.js":[function(require,module,exports) {
module.exports = multiply

/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function multiply(out, a, b) {
    out[0] = a[0] * b[0]
    out[1] = a[1] * b[1]
    return out
}
},{}],"../node_modules/gl-vec2/mul.js":[function(require,module,exports) {
module.exports = require('./multiply')

},{"./multiply":"../node_modules/gl-vec2/multiply.js"}],"../node_modules/gl-vec2/divide.js":[function(require,module,exports) {
module.exports = divide

/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function divide(out, a, b) {
    out[0] = a[0] / b[0]
    out[1] = a[1] / b[1]
    return out
}
},{}],"../node_modules/gl-vec2/div.js":[function(require,module,exports) {
module.exports = require('./divide')

},{"./divide":"../node_modules/gl-vec2/divide.js"}],"../node_modules/gl-vec2/inverse.js":[function(require,module,exports) {
module.exports = inverse

/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to invert
 * @returns {vec2} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0]
  out[1] = 1.0 / a[1]
  return out
}

},{}],"../node_modules/gl-vec2/min.js":[function(require,module,exports) {
module.exports = min

/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function min(out, a, b) {
    out[0] = Math.min(a[0], b[0])
    out[1] = Math.min(a[1], b[1])
    return out
}
},{}],"../node_modules/gl-vec2/max.js":[function(require,module,exports) {
module.exports = max

/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function max(out, a, b) {
    out[0] = Math.max(a[0], b[0])
    out[1] = Math.max(a[1], b[1])
    return out
}
},{}],"../node_modules/gl-vec2/rotate.js":[function(require,module,exports) {
module.exports = rotate

/**
 * Rotates a vec2 by an angle
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to rotate
 * @param {Number} angle the angle of rotation (in radians)
 * @returns {vec2} out
 */
function rotate(out, a, angle) {
  var c = Math.cos(angle),
      s = Math.sin(angle)
  var x = a[0],
      y = a[1]

  out[0] = x * c - y * s
  out[1] = x * s + y * c

  return out
}


},{}],"../node_modules/gl-vec2/floor.js":[function(require,module,exports) {
module.exports = floor

/**
 * Math.floor the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to floor
 * @returns {vec2} out
 */
function floor(out, a) {
  out[0] = Math.floor(a[0])
  out[1] = Math.floor(a[1])
  return out
}

},{}],"../node_modules/gl-vec2/ceil.js":[function(require,module,exports) {
module.exports = ceil

/**
 * Math.ceil the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to ceil
 * @returns {vec2} out
 */
function ceil(out, a) {
  out[0] = Math.ceil(a[0])
  out[1] = Math.ceil(a[1])
  return out
}

},{}],"../node_modules/gl-vec2/round.js":[function(require,module,exports) {
module.exports = round

/**
 * Math.round the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to round
 * @returns {vec2} out
 */
function round(out, a) {
  out[0] = Math.round(a[0])
  out[1] = Math.round(a[1])
  return out
}

},{}],"../node_modules/gl-vec2/scale.js":[function(require,module,exports) {
module.exports = scale

/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */
function scale(out, a, b) {
    out[0] = a[0] * b
    out[1] = a[1] * b
    return out
}
},{}],"../node_modules/gl-vec2/scaleAndAdd.js":[function(require,module,exports) {
module.exports = scaleAndAdd

/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */
function scaleAndAdd(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale)
    out[1] = a[1] + (b[1] * scale)
    return out
}
},{}],"../node_modules/gl-vec2/distance.js":[function(require,module,exports) {
module.exports = distance

/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1]
    return Math.sqrt(x*x + y*y)
}
},{}],"../node_modules/gl-vec2/dist.js":[function(require,module,exports) {
module.exports = require('./distance')

},{"./distance":"../node_modules/gl-vec2/distance.js"}],"../node_modules/gl-vec2/squaredDistance.js":[function(require,module,exports) {
module.exports = squaredDistance

/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1]
    return x*x + y*y
}
},{}],"../node_modules/gl-vec2/sqrDist.js":[function(require,module,exports) {
module.exports = require('./squaredDistance')

},{"./squaredDistance":"../node_modules/gl-vec2/squaredDistance.js"}],"../node_modules/gl-vec2/length.js":[function(require,module,exports) {
module.exports = length

/**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
    var x = a[0],
        y = a[1]
    return Math.sqrt(x*x + y*y)
}
},{}],"../node_modules/gl-vec2/len.js":[function(require,module,exports) {
module.exports = require('./length')

},{"./length":"../node_modules/gl-vec2/length.js"}],"../node_modules/gl-vec2/squaredLength.js":[function(require,module,exports) {
module.exports = squaredLength

/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
    var x = a[0],
        y = a[1]
    return x*x + y*y
}
},{}],"../node_modules/gl-vec2/sqrLen.js":[function(require,module,exports) {
module.exports = require('./squaredLength')

},{"./squaredLength":"../node_modules/gl-vec2/squaredLength.js"}],"../node_modules/gl-vec2/negate.js":[function(require,module,exports) {
module.exports = negate

/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */
function negate(out, a) {
    out[0] = -a[0]
    out[1] = -a[1]
    return out
}
},{}],"../node_modules/gl-vec2/normalize.js":[function(require,module,exports) {
module.exports = normalize

/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */
function normalize(out, a) {
    var x = a[0],
        y = a[1]
    var len = x*x + y*y
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len)
        out[0] = a[0] * len
        out[1] = a[1] * len
    }
    return out
}
},{}],"../node_modules/gl-vec2/dot.js":[function(require,module,exports) {
module.exports = dot

/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1]
}
},{}],"../node_modules/gl-vec2/cross.js":[function(require,module,exports) {
module.exports = cross

/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
    var z = a[0] * b[1] - a[1] * b[0]
    out[0] = out[1] = 0
    out[2] = z
    return out
}
},{}],"../node_modules/gl-vec2/lerp.js":[function(require,module,exports) {
module.exports = lerp

/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec2} out
 */
function lerp(out, a, b, t) {
    var ax = a[0],
        ay = a[1]
    out[0] = ax + t * (b[0] - ax)
    out[1] = ay + t * (b[1] - ay)
    return out
}
},{}],"../node_modules/gl-vec2/random.js":[function(require,module,exports) {
module.exports = random

/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */
function random(out, scale) {
    scale = scale || 1.0
    var r = Math.random() * 2.0 * Math.PI
    out[0] = Math.cos(r) * scale
    out[1] = Math.sin(r) * scale
    return out
}
},{}],"../node_modules/gl-vec2/transformMat2.js":[function(require,module,exports) {
module.exports = transformMat2

/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat2(out, a, m) {
    var x = a[0],
        y = a[1]
    out[0] = m[0] * x + m[2] * y
    out[1] = m[1] * x + m[3] * y
    return out
}
},{}],"../node_modules/gl-vec2/transformMat2d.js":[function(require,module,exports) {
module.exports = transformMat2d

/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat2d(out, a, m) {
    var x = a[0],
        y = a[1]
    out[0] = m[0] * x + m[2] * y + m[4]
    out[1] = m[1] * x + m[3] * y + m[5]
    return out
}
},{}],"../node_modules/gl-vec2/transformMat3.js":[function(require,module,exports) {
module.exports = transformMat3

/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat3(out, a, m) {
    var x = a[0],
        y = a[1]
    out[0] = m[0] * x + m[3] * y + m[6]
    out[1] = m[1] * x + m[4] * y + m[7]
    return out
}
},{}],"../node_modules/gl-vec2/transformMat4.js":[function(require,module,exports) {
module.exports = transformMat4

/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat4(out, a, m) {
    var x = a[0], 
        y = a[1]
    out[0] = m[0] * x + m[4] * y + m[12]
    out[1] = m[1] * x + m[5] * y + m[13]
    return out
}
},{}],"../node_modules/gl-vec2/forEach.js":[function(require,module,exports) {
module.exports = forEach

var vec = require('./create')()

/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
function forEach(a, stride, offset, count, fn, arg) {
    var i, l
    if(!stride) {
        stride = 2
    }

    if(!offset) {
        offset = 0
    }
    
    if(count) {
        l = Math.min((count * stride) + offset, a.length)
    } else {
        l = a.length
    }

    for(i = offset; i < l; i += stride) {
        vec[0] = a[i]
        vec[1] = a[i+1]
        fn(vec, vec, arg)
        a[i] = vec[0]
        a[i+1] = vec[1]
    }
    
    return a
}
},{"./create":"../node_modules/gl-vec2/create.js"}],"../node_modules/gl-vec2/limit.js":[function(require,module,exports) {
module.exports = limit;

/**
 * Limit the magnitude of this vector to the value used for the `max`
 * parameter.
 *
 * @param  {vec2} the vector to limit
 * @param  {Number} max the maximum magnitude for the vector
 * @returns {vec2} out
 */
function limit(out, a, max) {
  var mSq = a[0] * a[0] + a[1] * a[1];

  if (mSq > max * max) {
    var n = Math.sqrt(mSq);
    out[0] = a[0] / n * max;
    out[1] = a[1] / n * max;
  } else {
    out[0] = a[0];
    out[1] = a[1];
  }

  return out;
}

},{}],"../node_modules/gl-vec2/index.js":[function(require,module,exports) {
module.exports = {
  EPSILON: require('./epsilon')
  , create: require('./create')
  , clone: require('./clone')
  , fromValues: require('./fromValues')
  , copy: require('./copy')
  , set: require('./set')
  , equals: require('./equals')
  , exactEquals: require('./exactEquals')
  , add: require('./add')
  , subtract: require('./subtract')
  , sub: require('./sub')
  , multiply: require('./multiply')
  , mul: require('./mul')
  , divide: require('./divide')
  , div: require('./div')
  , inverse: require('./inverse')
  , min: require('./min')
  , max: require('./max')
  , rotate: require('./rotate')
  , floor: require('./floor')
  , ceil: require('./ceil')
  , round: require('./round')
  , scale: require('./scale')
  , scaleAndAdd: require('./scaleAndAdd')
  , distance: require('./distance')
  , dist: require('./dist')
  , squaredDistance: require('./squaredDistance')
  , sqrDist: require('./sqrDist')
  , length: require('./length')
  , len: require('./len')
  , squaredLength: require('./squaredLength')
  , sqrLen: require('./sqrLen')
  , negate: require('./negate')
  , normalize: require('./normalize')
  , dot: require('./dot')
  , cross: require('./cross')
  , lerp: require('./lerp')
  , random: require('./random')
  , transformMat2: require('./transformMat2')
  , transformMat2d: require('./transformMat2d')
  , transformMat3: require('./transformMat3')
  , transformMat4: require('./transformMat4')
  , forEach: require('./forEach')
  , limit: require('./limit')
}

},{"./epsilon":"../node_modules/gl-vec2/epsilon.js","./create":"../node_modules/gl-vec2/create.js","./clone":"../node_modules/gl-vec2/clone.js","./fromValues":"../node_modules/gl-vec2/fromValues.js","./copy":"../node_modules/gl-vec2/copy.js","./set":"../node_modules/gl-vec2/set.js","./equals":"../node_modules/gl-vec2/equals.js","./exactEquals":"../node_modules/gl-vec2/exactEquals.js","./add":"../node_modules/gl-vec2/add.js","./subtract":"../node_modules/gl-vec2/subtract.js","./sub":"../node_modules/gl-vec2/sub.js","./multiply":"../node_modules/gl-vec2/multiply.js","./mul":"../node_modules/gl-vec2/mul.js","./divide":"../node_modules/gl-vec2/divide.js","./div":"../node_modules/gl-vec2/div.js","./inverse":"../node_modules/gl-vec2/inverse.js","./min":"../node_modules/gl-vec2/min.js","./max":"../node_modules/gl-vec2/max.js","./rotate":"../node_modules/gl-vec2/rotate.js","./floor":"../node_modules/gl-vec2/floor.js","./ceil":"../node_modules/gl-vec2/ceil.js","./round":"../node_modules/gl-vec2/round.js","./scale":"../node_modules/gl-vec2/scale.js","./scaleAndAdd":"../node_modules/gl-vec2/scaleAndAdd.js","./distance":"../node_modules/gl-vec2/distance.js","./dist":"../node_modules/gl-vec2/dist.js","./squaredDistance":"../node_modules/gl-vec2/squaredDistance.js","./sqrDist":"../node_modules/gl-vec2/sqrDist.js","./length":"../node_modules/gl-vec2/length.js","./len":"../node_modules/gl-vec2/len.js","./squaredLength":"../node_modules/gl-vec2/squaredLength.js","./sqrLen":"../node_modules/gl-vec2/sqrLen.js","./negate":"../node_modules/gl-vec2/negate.js","./normalize":"../node_modules/gl-vec2/normalize.js","./dot":"../node_modules/gl-vec2/dot.js","./cross":"../node_modules/gl-vec2/cross.js","./lerp":"../node_modules/gl-vec2/lerp.js","./random":"../node_modules/gl-vec2/random.js","./transformMat2":"../node_modules/gl-vec2/transformMat2.js","./transformMat2d":"../node_modules/gl-vec2/transformMat2d.js","./transformMat3":"../node_modules/gl-vec2/transformMat3.js","./transformMat4":"../node_modules/gl-vec2/transformMat4.js","./forEach":"../node_modules/gl-vec2/forEach.js","./limit":"../node_modules/gl-vec2/limit.js"}],"../node_modules/json-stringify-safe/stringify.js":[function(require,module,exports) {
exports = module.exports = stringify
exports.getSerialize = serializer

function stringify(obj, replacer, spaces, cycleReplacer) {
  return JSON.stringify(obj, serializer(replacer, cycleReplacer), spaces)
}

function serializer(replacer, cycleReplacer) {
  var stack = [], keys = []

  if (cycleReplacer == null) cycleReplacer = function(key, value) {
    if (stack[0] === value) return "[Circular ~]"
    return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]"
  }

  return function(key, value) {
    if (stack.length > 0) {
      var thisPos = stack.indexOf(this)
      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this)
      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key)
      if (~stack.indexOf(value)) value = cycleReplacer.call(this, key, value)
    }
    else stack.push(value)

    return replacer == null ? value : replacer.call(this, key, value)
  }
}

},{}],"../node_modules/random-seed/index.js":[function(require,module,exports) {
/*
 * random-seed
 * https://github.com/skratchdot/random-seed
 *
 * This code was originally written by Steve Gibson and can be found here:
 *
 * https://www.grc.com/otg/uheprng.htm
 *
 * It was slightly modified for use in node, to pass jshint, and a few additional
 * helper functions were added.
 *
 * Copyright (c) 2013 skratchdot
 * Dual Licensed under the MIT license and the original GRC copyright/license
 * included below.
 */

/*	============================================================================
									Gibson Research Corporation
				UHEPRNG - Ultra High Entropy Pseudo-Random Number Generator
	============================================================================
	LICENSE AND COPYRIGHT:  THIS CODE IS HEREBY RELEASED INTO THE PUBLIC DOMAIN
	Gibson Research Corporation releases and disclaims ALL RIGHTS AND TITLE IN
	THIS CODE OR ANY DERIVATIVES. Anyone may be freely use it for any purpose.
	============================================================================
	This is GRC's cryptographically strong PRNG (pseudo-random number generator)
	for JavaScript. It is driven by 1536 bits of entropy, stored in an array of
	48, 32-bit JavaScript variables.  Since many applications of this generator,
	including ours with the "Off The Grid" Latin Square generator, may require
	the deteriministic re-generation of a sequence of PRNs, this PRNG's initial
	entropic state can be read and written as a static whole, and incrementally
	evolved by pouring new source entropy into the generator's internal state.
	----------------------------------------------------------------------------
	ENDLESS THANKS are due Johannes Baagoe for his careful development of highly
	robust JavaScript implementations of JS PRNGs.  This work was based upon his
	JavaScript "Alea" PRNG which is based upon the extremely robust Multiply-
	With-Carry (MWC) PRNG invented by George Marsaglia. MWC Algorithm References:
	http://www.GRC.com/otg/Marsaglia_PRNGs.pdf
	http://www.GRC.com/otg/Marsaglia_MWC_Generators.pdf
	----------------------------------------------------------------------------
	The quality of this algorithm's pseudo-random numbers have been verified by
	multiple independent researchers. It handily passes the fermilab.ch tests as
	well as the "diehard" and "dieharder" test suites.  For individuals wishing
	to further verify the quality of this algorithm's pseudo-random numbers, a
	256-megabyte file of this algorithm's output may be downloaded from GRC.com,
	and a Microsoft Windows scripting host (WSH) version of this algorithm may be
	downloaded and run from the Windows command prompt to generate unique files
	of any size:
	The Fermilab "ENT" tests: http://fourmilab.ch/random/
	The 256-megabyte sample PRN file at GRC: https://www.GRC.com/otg/uheprng.bin
	The Windows scripting host version: https://www.GRC.com/otg/wsh-uheprng.js
	----------------------------------------------------------------------------
	Qualifying MWC multipliers are: 187884, 686118, 898134, 1104375, 1250205,
	1460910 and 1768863. (We use the largest one that's < 2^21)
	============================================================================ */
'use strict';

var stringify = require('json-stringify-safe');
/*	============================================================================
This is based upon Johannes Baagoe's carefully designed and efficient hash
function for use with JavaScript.  It has a proven "avalanche" effect such
that every bit of the input affects every bit of the output 50% of the time,
which is good.	See: http://baagoe.com/en/RandomMusings/hash/avalanche.xhtml
============================================================================
*/


var Mash = function () {
  var n = 0xefc8249d;

  var mash = function (data) {
    if (data) {
      data = data.toString();

      for (var i = 0; i < data.length; i++) {
        n += data.charCodeAt(i);
        var h = 0.02519603282416938 * n;
        n = h >>> 0;
        h -= n;
        h *= n;
        n = h >>> 0;
        h -= n;
        n += h * 0x100000000; // 2^32
      }

      return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
    } else {
      n = 0xefc8249d;
    }
  };

  return mash;
};

var uheprng = function (seed) {
  return function () {
    var o = 48; // set the 'order' number of ENTROPY-holding 32-bit values

    var c = 1; // init the 'carry' used by the multiply-with-carry (MWC) algorithm

    var p = o; // init the 'phase' (max-1) of the intermediate variable pointer

    var s = new Array(o); // declare our intermediate variables array

    var i; // general purpose local

    var j; // general purpose local

    var k = 0; // general purpose local
    // when our "uheprng" is initially invoked our PRNG state is initialized from the
    // browser's own local PRNG. This is okay since although its generator might not
    // be wonderful, it's useful for establishing large startup entropy for our usage.

    var mash = new Mash(); // get a pointer to our high-performance "Mash" hash
    // fill the array with initial mash hash values

    for (i = 0; i < o; i++) {
      s[i] = mash(Math.random());
    } // this PRIVATE (internal access only) function is the heart of the multiply-with-carry
    // (MWC) PRNG algorithm. When called it returns a pseudo-random number in the form of a
    // 32-bit JavaScript fraction (0.0 to <1.0) it is a PRIVATE function used by the default
    // [0-1] return function, and by the random 'string(n)' function which returns 'n'
    // characters from 33 to 126.


    var rawprng = function () {
      if (++p >= o) {
        p = 0;
      }

      var t = 1768863 * s[p] + c * 2.3283064365386963e-10; // 2^-32

      return s[p] = t - (c = t | 0);
    }; // this EXPORTED function is the default function returned by this library.
    // The values returned are integers in the range from 0 to range-1. We first
    // obtain two 32-bit fractions (from rawprng) to synthesize a single high
    // resolution 53-bit prng (0 to <1), then we multiply this by the caller's
    // "range" param and take the "floor" to return a equally probable integer.


    var random = function (range) {
      return Math.floor(range * (rawprng() + (rawprng() * 0x200000 | 0) * 1.1102230246251565e-16)); // 2^-53
    }; // this EXPORTED function 'string(n)' returns a pseudo-random string of
    // 'n' printable characters ranging from chr(33) to chr(126) inclusive.


    random.string = function (count) {
      var i;
      var s = '';

      for (i = 0; i < count; i++) {
        s += String.fromCharCode(33 + random(94));
      }

      return s;
    }; // this PRIVATE "hash" function is used to evolve the generator's internal
    // entropy state. It is also called by the EXPORTED addEntropy() function
    // which is used to pour entropy into the PRNG.


    var hash = function () {
      var args = Array.prototype.slice.call(arguments);

      for (i = 0; i < args.length; i++) {
        for (j = 0; j < o; j++) {
          s[j] -= mash(args[i]);

          if (s[j] < 0) {
            s[j] += 1;
          }
        }
      }
    }; // this EXPORTED "clean string" function removes leading and trailing spaces and non-printing
    // control characters, including any embedded carriage-return (CR) and line-feed (LF) characters,
    // from any string it is handed. this is also used by the 'hashstring' function (below) to help
    // users always obtain the same EFFECTIVE uheprng seeding key.


    random.cleanString = function (inStr) {
      inStr = inStr.replace(/(^\s*)|(\s*$)/gi, ''); // remove any/all leading spaces

      inStr = inStr.replace(/[\x00-\x1F]/gi, ''); // remove any/all control characters

      inStr = inStr.replace(/\n /, '\n'); // remove any/all trailing spaces

      return inStr; // return the cleaned up result
    }; // this EXPORTED "hash string" function hashes the provided character string after first removing
    // any leading or trailing spaces and ignoring any embedded carriage returns (CR) or Line Feeds (LF)


    random.hashString = function (inStr) {
      inStr = random.cleanString(inStr);
      mash(inStr); // use the string to evolve the 'mash' state

      for (i = 0; i < inStr.length; i++) {
        // scan through the characters in our string
        k = inStr.charCodeAt(i); // get the character code at the location

        for (j = 0; j < o; j++) {
          //	"mash" it into the UHEPRNG state
          s[j] -= mash(k);

          if (s[j] < 0) {
            s[j] += 1;
          }
        }
      }
    }; // this EXPORTED function allows you to seed the random generator.


    random.seed = function (seed) {
      if (typeof seed === 'undefined' || seed === null) {
        seed = Math.random();
      }

      if (typeof seed !== 'string') {
        seed = stringify(seed, function (key, value) {
          if (typeof value === 'function') {
            return value.toString();
          }

          return value;
        });
      }

      random.initState();
      random.hashString(seed);
    }; // this handy exported function is used to add entropy to our uheprng at any time


    random.addEntropy = function ()
    /* accept zero or more arguments */
    {
      var args = [];

      for (i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
      }

      hash(k++ + new Date().getTime() + args.join('') + Math.random());
    }; // if we want to provide a deterministic startup context for our PRNG,
    // but without directly setting the internal state variables, this allows
    // us to initialize the mash hash and PRNG's internal state before providing
    // some hashing input


    random.initState = function () {
      mash(); // pass a null arg to force mash hash to init

      for (i = 0; i < o; i++) {
        s[i] = mash(' '); // fill the array with initial mash hash values
      }

      c = 1; // init our multiply-with-carry carry

      p = o; // init our phase
    }; // we use this (optional) exported function to signal the JavaScript interpreter
    // that we're finished using the "Mash" hash function so that it can free up the
    // local "instance variables" is will have been maintaining.  It's not strictly
    // necessary, of course, but it's good JavaScript citizenship.


    random.done = function () {
      mash = null;
    }; // if we called "uheprng" with a seed value, then execute random.seed() before returning


    if (typeof seed !== 'undefined') {
      random.seed(seed);
    } // Returns a random integer between 0 (inclusive) and range (exclusive)


    random.range = function (range) {
      return random(range);
    }; // Returns a random float between 0 (inclusive) and 1 (exclusive)


    random.random = function () {
      return random(Number.MAX_VALUE - 1) / Number.MAX_VALUE;
    }; // Returns a random float between min (inclusive) and max (exclusive)


    random.floatBetween = function (min, max) {
      return random.random() * (max - min) + min;
    }; // Returns a random integer between min (inclusive) and max (inclusive)


    random.intBetween = function (min, max) {
      return Math.floor(random.random() * (max - min + 1)) + min;
    }; // when our main outer "uheprng" function is called, after setting up our
    // initial variables and entropic state, we return an "instance pointer"
    // to the internal anonymous function which can then be used to access
    // the uheprng's various exported functions.  As with the ".done" function
    // above, we should set the returned value to 'null' once we're finished
    // using any of these functions.


    return random;
  }();
}; // Modification for use in node:


uheprng.create = function (seed) {
  return new uheprng(seed);
};

module.exports = uheprng;
},{"json-stringify-safe":"../node_modules/json-stringify-safe/stringify.js"}],"Boid.ts":[function(require,module,exports) {
"use strict";

exports.__esModule = true;

var gl_vec2_1 = require("gl-vec2");

var random_seed_1 = require("random-seed");

var randomGenerator = random_seed_1.create('dudee');
var random = randomGenerator.floatBetween;

var Boid =
/** @class */
function () {
  function Boid(centerX, centerY, canvasWidth, canvasHeight) {
    this.acceleration = gl_vec2_1.set(gl_vec2_1.create(), 0, 0);
    this.velocity = gl_vec2_1.set(gl_vec2_1.create(), random(-1, 1), random(-1, 1));
    this.position = gl_vec2_1.set(gl_vec2_1.create(), centerX, centerY);
    this.r = 3.0;
    this.maxspeed = 3; // Maximum speed

    this.maxforce = 0.05; // Maximum steering force

    this.width = canvasWidth;
    this.height = canvasHeight;
  }

  Boid.prototype.run = function (boids) {
    this.flock(boids);
    this.update();
    this.borders();
  };

  Boid.prototype.applyForce = function (force) {
    // We could add mass here if we want A = F / M
    // this.acceleration.add(force)
    gl_vec2_1.add(this.acceleration, this.acceleration, force);
  }; // We accumulate a new acceleration each time based on three rules


  Boid.prototype.flock = function (boids) {
    var sep = this.separate(boids); // Separation

    var ali = this.align(boids); // Alignment

    var coh = this.cohesion(boids); // Cohesion
    // Arbitrarily weight these forces

    gl_vec2_1.scale(sep, sep, 1.5);
    gl_vec2_1.scale(ali, ali, 1.0);
    gl_vec2_1.scale(coh, coh, 1.0); // Add the force vectors to acceleration

    this.applyForce(sep);
    this.applyForce(ali);
    this.applyForce(coh);
  }; // Method to update location


  Boid.prototype.update = function () {
    // Update velocity
    gl_vec2_1.add(this.velocity, this.velocity, this.acceleration); // Limit speed

    gl_vec2_1.limit(this.velocity, this.velocity, this.maxspeed);
    gl_vec2_1.add(this.position, this.position, this.velocity); // Reset accelertion to 0 each cycle

    gl_vec2_1.scale(this.acceleration, this.acceleration, 0);
  }; // A method that calculates and applies a steering force towards a target
  // STEER = DESIRED MINUS VELOCITY


  Boid.prototype.seek = function (target) {
    var desired = gl_vec2_1.sub([], target, this.position); // A vector pointing from the location to the target
    // Normalize desired and scale to maximum speed

    gl_vec2_1.normalize(desired, desired);
    gl_vec2_1.scale(desired, desired, this.maxspeed); // Steering = Desired minus Velocity

    var steer = gl_vec2_1.sub([], desired, this.velocity);
    gl_vec2_1.limit(steer, steer, this.maxforce); // Limit to maximum steering force

    return steer;
  };

  Boid.prototype.render = function () {// // Draw a triangle rotated in the direction of velocity
    // let theta = this.velocity.heading() + radians(90)
    // fill(127)
    // stroke(200)
    // push()
    // translate(this.position.x, this.position.y)
    // rotate(theta)
    // beginShape()
    // vertex(0, -this.r * 2)
    // vertex(-this.r, this.r * 2)
    // vertex(this.r, this.r * 2)
    // endShape(CLOSE)
    // pop()
  }; // Wraparound


  Boid.prototype.borders = function () {
    if (this.position[0] < -this.r) this.position[0] = this.width + this.r;
    if (this.position[1] < -this.r) this.position[1] = this.height + this.r;
    if (this.position[0] > this.width + this.r) this.position[0] = -this.r;
    if (this.position[1] > this.height + this.r) this.position[1] = -this.r;
  }; // Separation
  // Method checks for nearby boids and steers away


  Boid.prototype.separate = function (boids) {
    var desiredseparation = 25.0;
    var steer = gl_vec2_1.set(gl_vec2_1.create(), 0, 0);
    var count = 0; // For every boid in the system, check if it's too close

    for (var i = 0; i < boids.length; i++) {
      var d = gl_vec2_1.dist(this.position, boids[i].position); // If the distance is greater than 0 and less than an arbitrary amount (0 when you are yourself)

      if (d > 0 && d < desiredseparation) {
        // Calculate vector pointing away from neighbor
        var diff = gl_vec2_1.sub([], this.position, boids[i].position);
        gl_vec2_1.normalize(diff, diff);
        gl_vec2_1.scale(diff, diff, 1 / d); // Weight by distance

        gl_vec2_1.add(steer, steer, diff);
        count++; // Keep track of how many
      }
    } // Average -- divide by how many


    if (count > 0) {
      gl_vec2_1.scale(steer, steer, 1 / count);
    } // As long as the vector is greater than 0


    if (gl_vec2_1.len(steer) > 0) {
      // Implement Reynolds: Steering = Desired - Velocity
      gl_vec2_1.normalize(steer, steer);
      gl_vec2_1.scale(steer, steer, this.maxspeed);
      gl_vec2_1.sub(steer, steer, this.velocity);
      gl_vec2_1.limit(steer, steer, this.maxforce);
    }

    return steer;
  }; // Alignment
  // For every nearby boid in the system, calculate the average velocity


  Boid.prototype.align = function (boids) {
    var neighbordist = 50;
    var sum = gl_vec2_1.set(gl_vec2_1.create(), 0, 0);
    var count = 0;

    for (var i = 0; i < boids.length; i++) {
      var d = gl_vec2_1.dist(this.position, boids[i].position);

      if (d > 0 && d < neighbordist) {
        gl_vec2_1.add(sum, sum, boids[i].velocity);
        count++;
      }
    }

    if (count > 0) {
      gl_vec2_1.scale(sum, sum, 1 / count);
      gl_vec2_1.normalize(sum, sum);
      gl_vec2_1.scale(sum, sum, this.maxspeed);
      var steer = gl_vec2_1.sub(sum, sum, this.velocity);
      gl_vec2_1.limit(steer, steer, this.maxforce);
      return steer;
    } else {
      return gl_vec2_1.set(gl_vec2_1.create(), 0, 0);
    }
  }; // Cohesion
  // For the average location (i.e. center) of all nearby boids, calculate steering vector towards that location


  Boid.prototype.cohesion = function (boids) {
    var neighbordist = 50;
    var sum = gl_vec2_1.set(gl_vec2_1.create(), 0, 0); // Start with empty vector to accumulate all locations

    var count = 0;

    for (var i = 0; i < boids.length; i++) {
      var d = gl_vec2_1.dist(this.position, boids[i].position);

      if (d > 0 && d < neighbordist) {
        gl_vec2_1.add(sum, sum, boids[i].position); // Add location

        count++;
      }
    }

    if (count > 0) {
      gl_vec2_1.scale(sum, sum, 1 / count);
      return this.seek(sum); // Steer towards the location
    } else {
      return gl_vec2_1.set(gl_vec2_1.create(), 0, 0);
    }
  };

  return Boid;
}();

exports.Boid = Boid;
},{"gl-vec2":"../node_modules/gl-vec2/index.js","random-seed":"../node_modules/random-seed/index.js"}],"scene.ts":[function(require,module,exports) {
"use strict";

exports.__esModule = true;

var Flock_1 = require("./Flock");

var Boid_1 = require("./Boid");

var flock = new Flock_1.Flock();

function init(context, width, height) {
  // Add an initial set of boids into the system
  for (var i = 0; i < 60; i++) {
    var b = new Boid_1.Boid(width / 2, height / 2, width, height);
    flock.addBoid(b);
  }

  var gradient = context.createLinearGradient(0, 0, width, 0);
  gradient.addColorStop(0, '#00b4db');
  gradient.addColorStop(1, '#0083b0');

  function loop() {
    flock.run();
    requestAnimationFrame(loop);
    context.clearRect(0, 0, width, height);
    context.fillStyle = gradient;
    context.fillRect(0, 0, width, height);
    context.fillStyle = 'black';

    for (var i = 0; i < flock.boids.length; ++i) {
      var boid = flock.boids[i];
      context.beginPath();
      context.moveTo(boid.position[0], boid.position[1]);
      context.arc(boid.position[0], boid.position[1], 2, 0, Math.PI * 2);
      context.closePath();
      context.fill();
    }
  }

  requestAnimationFrame(loop);
}

exports.init = init;
},{"./Flock":"Flock.ts","./Boid":"Boid.ts"}],"index.ts":[function(require,module,exports) {
"use strict";

exports.__esModule = true;

var canvas_fit_margin_ts_1 = require("canvas-fit-margin-ts");

var scene_1 = require("./scene");

var scale = window.devicePixelRatio || 1;
var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');
var fit = canvas_fit_margin_ts_1.createFit(canvas, {
  scale: scale
});
document.body.style.margin = '0';
document.body.appendChild(canvas);

function render(width, height) {
  scene_1.init(context, width, height);
}

var onResize = function onResize() {
  var _a = fit(),
      width = _a[0],
      height = _a[1];

  render(width * scale, height * scale);
  console.log(width, height);
};

onResize();
window.addEventListener('resize', onResize);

if (module.hot) {
  ;
  module.hot.dispose(function () {
    return canvas.remove();
  });
}
},{"canvas-fit-margin-ts":"../node_modules/canvas-fit-margin-ts/dist/index.js","./scene":"scene.ts"}],"../node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50756" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../node_modules/parcel/src/builtins/hmr-runtime.js","index.ts"], null)
//# sourceMappingURL=/src.77de5100.map